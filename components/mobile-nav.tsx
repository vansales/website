"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { type NavNode } from "@/lib/nav";

/** Hamburger menu for < md screens: reveals the nav links + Sign in.
 * Items with children are shown as a labelled group with indented links. */
export function MobileNav({
  items,
  signIn,
  signInHref,
  contactSales,
  contactHref,
}: {
  items: NavNode[];
  signIn: string;
  signInHref: string;
  contactSales: string;
  contactHref: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          <div className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/20" onClick={close} />
          <div className="absolute left-0 right-0 top-full z-40 border-t border-white/15 bg-[#1763ad] p-2 shadow-xl">
            <nav className="flex flex-col">
              {items.map((n) =>
                n.groups ? (
                  <div key={n.label} className="py-1">
                    <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-white/45">
                      {n.label}
                    </p>
                    {n.groups.flatMap((g) => g.items).map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={close}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        {it.label}
                      </Link>
                    ))}
                    {n.allHref && (
                      <Link
                        href={n.allHref}
                        onClick={close}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white"
                      >
                        {n.allLabel} →
                      </Link>
                    )}
                  </div>
                ) : n.children ? (
                  <div key={n.label} className="py-1">
                    <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-white/45">
                      {n.label}
                    </p>
                    {n.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={close}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={n.label}
                    href={n.href!}
                    onClick={close}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {n.label}
                  </Link>
                )
              )}
              <a
                href={signInHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {signIn}
              </a>
              <a
                href={contactHref}
                onClick={close}
                className="mt-1 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                {contactSales}
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
