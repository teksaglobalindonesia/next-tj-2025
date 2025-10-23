import Header from "../components/custom/header";
import Hero from "../components/custom/hero";
import Client from "../components/custom/clients";
import Community from "../components/custom/community";
import Spending from "../components/custom/spending";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Client />
      <Community />
      <Spending />
    </main>
  )
}