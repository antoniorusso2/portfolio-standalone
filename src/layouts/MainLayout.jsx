import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar/Navbar";
import Contacts from "../components/sections/Contacts";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import SectionContainer from "../components/sections/SectionContainer";

export default function MainLAyout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-20 grow py-6">
        <SectionContainer children={<Home />} />
        <SectionContainer children={<Projects />} />
        <SectionContainer children={<Contacts />} />
      </main>
      <Footer />
    </>
  );
}
