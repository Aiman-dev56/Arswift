import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Logos from "./components/Logo";
import ScrollBarProgress from "./components/ui/ScrollProgressBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollHeroSection from "./components/ScrollHeroSection";



export default function App() {
  return (
    <>
      <Toaster position="bottom-left" />
      <Header />
      <ScrollBarProgress />
      <div className="relative z-10">
        <Hero />
      </div>
      <ScrollHeroSection />
      <Logos />
      <JoinUs />

      <Footer />

    </>
  )

}