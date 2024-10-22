import { paymentMethod } from "../data/staticData";
import { FooterData } from "../data/staticData";
import NewsLetter4Footer from "./NewsLetter4Footer";
const Footer = () => {
  return (
    <div className="bg-eSmoke">
      <footer className="text-tLight pt-12 sm:max-md:pt-0 p-4">
        <div className="grid grid-cols-4 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
          {FooterData.map((item, index) => (
            <div className="sm:max-md:mt-8" key={index}>
              <p className="font-arimo uppercase text-tDark">{item.title}</p>
              {item.isNewsLetter ? (
                <NewsLetter4Footer />
              ) : (
                <div className="font-lato capitalize mt-7 sm:max-md:mt-1 ">
                  {item.desc.map((descItem, index) => (
                    <p key={index}>{descItem}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="bg-eSmokePlus h-[0.1em] w-full mt-16"></div>
        <div className="flex justify-between items-center mt-7 sm:max-md:flex-col">
          <div className="flex flex-col">
            <span>&copy; 2024 NorthStar eCommerce</span>
            <span>Privacy Policy Terms & Conditions</span>
          </div>
          <div className="flex gap-3 h-10 sm:max-md:mt-3">
            {paymentMethod.map((gateway, index) => (
              <img key={index} src={gateway} height={15} width={70}></img>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
