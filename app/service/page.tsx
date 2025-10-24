
import SimpleHero from "../../components/custom/simple-hero";
import Header from "../../components/custom/header";
import ServiceList from "../../components/custom/service-list";

export default function Page() {
    return (
       <main>
        <Header />
        <SimpleHero />
        <ServiceList />
       </main>
    );  
}