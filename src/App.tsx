import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Logos from "./components/Logo";
import ScrollBarProgress from "./components/ui/ScrollProgressBar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";



export default function App() {
  return (
    <>
      <Toaster position="bottom-left" />
      <Header />
      <ScrollBarProgress />
      <Hero />
      <Services />
      <Logos />
      <JoinUs />

      <Footer />

    </>
  )

}