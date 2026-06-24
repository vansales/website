import { resolveLang } from "@/lib/server-lang";
import LandingPage from "@/components/landing-page";

export default function Page() {
  return <LandingPage initialLang={resolveLang()} />;
}
