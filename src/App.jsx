import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Navbar from "./Compo/Navbar";
import Hero from "./Compo/Hero";
import AboutUs from "./Compo/AboutUs";
import Careers from "./Compo/Careers";
import Gallery from "./Compo/Gallery";
import MeetOurTeam from "./Compo/MeetOurTeam";
import ProductAndServices from "./Compo/ProductAndServices";
import ValuesPage from "./Compo/ValuesPage";
import VisionAndMissionPage from "./Compo/VisionMission";
import WhyChooseUs from "./Compo/WhyChooseUs";
import AboutHero from "./Compo/AboutHero";
import Footer from "./Compo/Footer";
import Carrerhero from "./Compo/Careershero";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
       
        <Route path="/about" element={<AboutUs />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Hero />} />
        <Route path="/meetourtean" element={<MeetOurTeam />} />
        <Route path="/productandservices" element={<ProductAndServices />} />
        <Route path="/value" element={<ValuesPage />} />
        <Route path="/visionandmission" element={<VisionAndMissionPage />} />
        <Route path="/whychoose" element={<WhyChooseUs />} />
                <Route path="/abouthero" element={<AboutHero />} />
                <Route path="/carrehero" element={<Carrerhero />} />

      </Routes>

      {/* Footer stays on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
