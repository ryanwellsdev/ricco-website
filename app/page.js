import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Listen from "@/components/Listen";
import TourDates from "@/components/Shows";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <section id="listen">
          <Listen />
        </section>
        <section id="tour">
          <TourDates />
        </section>
        <section id="about">
          <About />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
