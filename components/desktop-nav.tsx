"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@vansales/design-system";
import { type NavNode } from "@/lib/nav";

/** Desktop (≥ md) primary nav. Renders plain links plus hover/focus dropdowns
 * for any item that has children. */
export function DesktopNav({ items }: { items: NavNode[] }) {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {items.map((n) =>
        n.groups ? (
          <MegaDropdown key={n.label} node={n} />
        ) : n.children ? (
          <NavDropdown key={n.label} node={n} />
        ) : (
          <Link
            key={n.label}
            href={n.href!}
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            {n.label}
          </Link>
        )
      )}
    </nav>
  );
}

/** Hover/focus helpers shared by the dropdown variants. */
function useHover() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => setOpen(false), 120);
  };
  return { open, setOpen, show, hide };
}

/** Multi-column mega menu (Features): grouped links + a "see all" footer. */
function MegaDropdown({ node }: { node: NavNode }) {
  const { open, setOpen, show, hide } = useHover();
  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href={node.href ?? "#"}
        onFocus={show}
        onBlur={hide}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-white/70 transition hover:text-white"
      >
        {node.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </Link>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-3">
          <div className="w-[620px] rounded-xl border bg-popover p-4 text-popover-foreground shadow-xl">
            <div className="grid grid-cols-3 gap-x-4 gap-y-1">
              {node.groups!.map((g) => (
                <div key={g.label}>
                  <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{g.label}</p>
                  {g.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-2 py-1.5 transition hover:bg-accent"
                    >
                      <span className="block text-sm font-medium">{it.label}</span>
                      {it.desc && <span className="block text-xs text-muted-foreground">{it.desc}</span>}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {node.allHref && (
              <div className="mt-3 border-t pt-3">
                <Link
                  href={node.allHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-primary hover:underline"
                >
                  {node.allLabel} →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function NavDropdown({ node }: { node: NavNode }) {
  const { open, setOpen, show, hide } = useHover();

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onFocus={show}
        onBlur={hide}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-white/70 transition hover:text-white"
      >
        {node.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        // pt-3 keeps a hover bridge between the trigger and the panel.
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="w-60 rounded-xl border bg-popover p-1.5 text-popover-foreground shadow-xl">
            {node.children!.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 transition hover:bg-accent"
              >
                <span className="block text-sm font-medium">{c.label}</span>
                {c.desc && (
                  <span className="mt-0.5 block text-xs text-muted-foreground">{c.desc}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
