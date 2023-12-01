import Footer from "@components/footer/Footer";
import Clients from "@components/home/Clients";
import Features from "@components/home/Features";
import Hero from "@components/home/Hero";
import Implement from "@components/home/Implement";
import Ready from "@components/home/Ready";

function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Implement />
      <Features />
      <Ready />
      <Footer />
    </main>
  );
}

export default Home;
