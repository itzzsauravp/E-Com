import Hero from "../components/Reusable/Hero";
import CardCollection from "../components/HomePage/CardCollection";
import InfoCollection from "../components/HomePage/InfoCollection";
import Schemes from "../components/HomePage/Schemes";
import hero from "../assets/Images/hero.png";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <section>
      <Hero img={hero} />
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold text-tDark font-arimo">
          Discover NEW Arrivals
        </h1>
        <p className="text-tLight mt-5 font-lato">Recently added apparel!</p>
      </div>
      <CardCollection isTopSeller={true} />
      <InfoCollection />
      <Schemes />
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold text-tDark font-arimo">
          Top Sellers
        </h1>
        <p className="text-tLight mt-5 font-lato">
          Browse our top-selling products
        </p>
      </div>
      <CardCollection isTopSeller={false} />
      <div className="text-center mt-16 mb-16">
        <NavLink
          to="/shop"
          className="bg-etBlue text-white px-8 py-4 uppercase font-lato"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Shop Now
        </NavLink>
      </div>
    </section>
  );
};

export default HomePage;
