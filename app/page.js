import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Listen from "@/components/Listen";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <section id="gallery">
          <Listen />
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
