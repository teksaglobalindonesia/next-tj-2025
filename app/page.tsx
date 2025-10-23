import Header from "../components/custom/header";
import Hero from "../components/custom/hero";
import Clients from "../components/custom/our-clients";
import Community from "../components/custom/community";
import Spending from "../components/custom/unseen-spending";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Clients/>
      <Community />
      <Spending />

    </main>
    
  );
}