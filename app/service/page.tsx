import Header from "../../components/custom/header";
import Simple from "../../components/custom/simple-hero";
import Servicelist from "../../components/custom/service-list";
import Quote from "../../components/custom/quote";
import Headerservice from "../../components/custom/header-service";

export default function Page() {
  return (
    <main>
        <Header />
        <Simple />
        <Servicelist />
        <Quote />
        <Headerservice />
    </main>
  );
}