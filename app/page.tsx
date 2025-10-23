import Header from "../components/custom/header";
import Hero from "../components/custom/hero";
import Client from "../components/custom/clients";
import Community from "../components/custom/community";
import Spending from "../components/custom/spending";
import Achievement from "../components/custom/achievement";
import Tutorial from "../components/custom/tutorial"
import NewMarketing from "@/components/custom/marketing";
import Ribbon from "@/components/custom/ribbon";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Client />
      <Community />
      <Spending />
      <Achievement />
      <Tutorial />
      <NewMarketing />
      <Ribbon />
    </main>
  )
}