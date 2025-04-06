import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Listen from "@/components/Listen";
import TourDates from "@/components/Shows";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <section id="Listen">
          <Listen />
        </section>
        <section id="Tour">
          <TourDates />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
