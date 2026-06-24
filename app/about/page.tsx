import type { Metadata } from "next";
import { resolveLang } from "@/lib/server-lang";
import CompanyPage from "@/components/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Vansales — turning distribution from an art that relies on experience into a system you can measure, control and scale.",
};

export default function Page() {
  return <CompanyPage initialLang={resolveLang()} />;
}
