import Simple from "../../components/custom/simple-hero";
import Header from "../../components/custom/header";
import Servicelist from "../../components/custom/service-list";
import Quote from "../../components/custom/quote";
import Footer from "../../components/custom/footer";


export default function Page() {
  return (
    <main>
      <Header />
      <Simple />
      <Servicelist />
      <Quote />
      <Footer />

    </main>
    
  );
}