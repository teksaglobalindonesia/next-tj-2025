import Header from "../components/custom/header";
import Hero from "../components/custom/hero";
import Clients from "../components/custom/our-clients";
import Community from "../components/custom/community";
import Spending from "../components/custom/unseen-spending";
import Achievement from "../components/custom/achievement";
import Design from "../components/custom/how-to-design";
import Marketing from "../components/custom/new-marketing";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Clients/>
      <Community />
      <Spending />
      <Achievement />
      <Design />
      <Marketing />

    </main>
    
  );
}