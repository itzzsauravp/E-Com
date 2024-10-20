import heroabout from "../assets/Images/heroabout.jpg";
import Hero from "../components/Reusable/Hero";
import buy1 from "../assets/Images/buy1.png";
import buy2 from "../assets/Images/buy2.png";
import { useState } from "react";

import BuyNowTaggedItem from "../components/Reusable/BuyNowTaggedItem";
import Founders from "../components/AboutPage/Founders";
import Testimonials from "../components/AboutPage/Testimonials";
const AboutPage = () => {
  const [hoverButton, setHoverButton] = useState<number | null>(null);
  return (
    <>
      <Hero img={heroabout} textOnImage="About Northstar" />
      <div className="flex flex-wrap justify-center items-center gap-10 mt-16 mb-16">
        <BuyNowTaggedItem
          img={buy1}
          setHoverButton={setHoverButton}
          hoverButton={hoverButton}
          uniqueID={0}
        />
        <BuyNowTaggedItem
          img={buy2}
          setHoverButton={setHoverButton}
          hoverButton={hoverButton}
          uniqueID={1}
        />
      </div>
      <Founders />
      <Testimonials />
    </>
  );
};

export default AboutPage;
