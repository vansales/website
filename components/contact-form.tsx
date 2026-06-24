"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Input,
  Textarea,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@vansales/design-system";
import { CheckCircle2 } from "lucide-react";
import { type Lang } from "@/lib/use-lang";

// Web3Forms free plan accepts submissions from the client only, so the key is
// public (NEXT_PUBLIC_). It can only post to the inbox tied to the key.
// TODO: move to a secure server-side sender (Resend / SMTP) — see docs/WEB-TODO.md.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export interface ContactCopy {
  fName: string;
  fNameP: string;
  fCompany: string;
  fCompanyP: string;
  fEmail: string;
  fPhone: string;
  fSize: string;
  fSizeP: string;
  sizes: readonly string[];
  fTopic: string;
  fTopicP: string;
  topics: readonly string[];
  fMessage: string;
  fMessageP: string;
  submit: string;
  sending: string;
  sentTitle: string;
  sentBody: string;
  errMsg: string;
  pdpaPre: string;
  pdpaLink: string;
}

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ copy, lang }: { copy: ContactCopy; lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");
  const [size, setSize] = useState("");
  const [topic, setTopic] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this. Pretend success so bots don't retry.
    if (String(data.get("botcheck") ?? "").trim() !== "") {
      form.reset();
      setSize("");
      setTopic("");
      setStatus("sent");
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New contact${topic ? ` · ${topic}` : ""} from ${name}${company ? ` (${company})` : ""}`,
          from_name: "Vansales website",
          name,
          email: email || "no-email@vansales.asia",
          phone: phone || "-",
          company: company || "-",
          Topic: topic || "-",
          "Sales team size": size || "-",
          message: message || "-",
          Language: lang === "th" ? "Thai" : "English",
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (res.ok && json.success) {
        form.reset();
        setSize("");
        setTopic("");
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border bg-muted/30 p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold">{copy.sentTitle}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{copy.sentBody}</p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="space-y-3 rounded-2xl border bg-muted/30 p-6" onSubmit={onSubmit}>
      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <Input label={copy.fName} name="name" placeholder={copy.fNameP} required />
      <Input label={copy.fCompany} name="company" placeholder={copy.fCompanyP} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Input label={copy.fEmail} name="email" type="email" placeholder="name@company.com" required />
        <Input label={copy.fPhone} name="phone" placeholder="08x-xxx-xxxx" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium leading-none">{copy.fTopic}</label>
        <Select value={topic} onValueChange={setTopic}>
          <SelectTrigger>
            <SelectValue placeholder={copy.fTopicP} />
          </SelectTrigger>
          <SelectContent>
            {copy.topics.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Textarea label={copy.fMessage} name="message" placeholder={copy.fMessageP} rows={3} />
      <div className="space-y-1.5">
        <label className="text-sm font-medium leading-none">{copy.fSize}</label>
        <Select value={size} onValueChange={setSize}>
          <SelectTrigger>
            <SelectValue placeholder={copy.fSizeP} />
          </SelectTrigger>
          <SelectContent>
            {copy.sizes.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="mt-2 w-full" size="lg" disabled={sending}>
        {sending ? copy.sending : copy.submit}
      </Button>
      {status === "error" && (
        <p className="text-center text-xs font-medium text-destructive">{copy.errMsg}</p>
      )}
      <p className="text-center text-xs text-muted-foreground">
        {copy.pdpaPre}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">{copy.pdpaLink}</Link>
      </p>
    </form>
  );
}
