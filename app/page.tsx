import { resolveLang } from "@/lib/server-lang";
import LandingPage from "@/components/landing-page";

export default async function Page() {
  return <LandingPage initialLang={await resolveLang()} />;
}
