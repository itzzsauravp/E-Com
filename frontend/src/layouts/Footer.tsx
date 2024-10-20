import visa from "../assets/Logo/visa.png";
import mastercard from "../assets/Logo/mastercard.png";
import paypal from "../assets/Logo/paypal.png";
import visaelectron from "../assets/Logo/visaelectron.png";
import { FaChevronRight } from "react-icons/fa";
const Footer = () => {
  const paymentMethod = [visa, mastercard, paypal, visaelectron];
  return (
    <div className="bg-eSmoke">
      <footer className="text-tLight pt-12 sm:max-md:pt-0 p-4">
        <div className="grid grid-cols-4 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
          <div className="sm:max-md:mt-8">
            <p className="font-arimo uppercase text-tDark">Company Info</p>
            <div className="font-lato capitalize mt-7 sm:max-md:mt-1 ">
              <p>About Us</p>
              <p>Latest Posts</p>
              <p>Contact Us</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="sm:max-md:mt-8">
            <p className="font-arimo uppercase text-tDark">Help Links</p>
            <div className="font-lato capitalize mt-7 sm:max-md:mt-1">
              <p>Tracking</p>
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Shipping Info</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="sm:max-md:mt-8">
            <p className="font-arimo uppercase text-tDark">Useful Links</p>
            <div className="font-lato capitalize mt-7 sm:max-md:mt-1">
              <p>Special Offers</p>
              <p>Gift Cards</p>
              <p>Advertising</p>
              <p>Terms of Use</p>
            </div>
          </div>
          <div className="sm:max-md:mt-8">
            <p className="font-arimo uppercase text-tDark">Get in the know</p>
            <div className="font-lato capitalize flex items-center gap-3 mt-7 sm:max-md:mt-2">
              <input
                type="text"
                className="outline-none border-b-2 border-black p-2 bg-transparent"
                placeholder="Enter Email"
              />
              <button>
                <FaChevronRight />
              </button>
            </div>
          </div>
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
