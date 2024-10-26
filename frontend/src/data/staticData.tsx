// Founders Array Data (Founders.tsx)
import founder1 from "../assets/Images/founder1.jpg";
import founder2 from "../assets/Images/founder2.jpg";
import founder3 from "../assets/Images/founder3.jpg";
import founder4 from "../assets/Images/founder4.jpg";

//Testimonial Array Data (Testimonial.tsx)
import testimonial1 from "../assets/Images/testimonial1.png";
import testimonial2 from "../assets/Images/testimonial2.png";
import testimonial3 from "../assets/Images/testimonial3.png";

//Infocollection Array Data (InfoCollection.tsx)
import { TbTruckDelivery } from "react-icons/tb";
import { FaLifeRing } from "react-icons/fa";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { FaFingerprint } from "react-icons/fa";

// PaymentMethod Array Data (Footer.tsx)
import visa from "../assets/Logo/visa.png";
import mastercard from "../assets/Logo/mastercard.png";
import paypal from "../assets/Logo/paypal.png";
import visaelectron from "../assets/Logo/visaelectron.png";

// NavBar Links Data (NavBar.tsx)
import { FiUser } from "react-icons/fi";
import { IoBagRemoveOutline } from "react-icons/io5";

// Founders Array Data (Founders.tsx)
export const foundersArray: { photo: string; name: string }[] = [
  {
    photo: founder1,
    name: "Marcus Bennett",
  },
  {
    photo: founder2,
    name: "David Chen",
  },
  {
    photo: founder3,
    name: "Raj Patel",
  },
  {
    photo: founder4,
    name: "Sarah Rodriguez",
  },
];

//Testimonial Array Data (testimonial.tsx)
export const testimonialArray: { photo: string; desc: string; name: string }[] =
  [
    {
      photo: testimonial1,
      desc: "Once we order some accessories items and we got the products delivered in our doorsteps, the customer support was super helpful and they answered all my queries.",
      name: "Stacy",
    },
    {
      photo: testimonial2,
      desc: "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
      name: "Tiffany",
    },
    {
      photo: testimonial3,
      desc: "I ordered 5 shirts from them and received them in no time. The customer support was awesome!!",
      name: "James",
    },
  ];

//Infocollection Array Data (InfoCollection.tsx)
export const infoCollectionArray: {
  icon: JSX.Element;
  title: string;
  desc: string;
}[] = [
  {
    icon: <TbTruckDelivery />,
    title: "Free Shipping",
    desc: "Enjoy frees shipping on all orders above $100.",
  },
  {
    icon: <FaLifeRing />,
    title: "Support 24/7",
    desc: "Our support team is there to help you for queries.",
  },
  {
    icon: <IoArrowUndoCircleOutline />,
    title: "30 Days Return",
    desc: "Simply return it withing 30 days for an exchange.",
  },
  {
    icon: <FaFingerprint />,
    title: "100% payment secure",
    desc: "Our payments are secured with 256 bit encryption.",
  },
];

// TABS Array Data (DescAndReview.tsx)
export const TABS: { label: string; content: string }[] = [
  {
    label: "Description",
    content: "This is the product Description ",
  },
  {
    label: "Reviews",
    content: "This is the product Reviews ",
  },
];

// PaymentMethod Array Data (Footer.tsx)
export const paymentMethod = [visa, mastercard, paypal, visaelectron];

// FooterData Array (Footer.tsx)
export const FooterData: {
  title: string;
  desc: string[];
  isNewsLetter?: boolean;
}[] = [
  {
    title: "Company Info",
    desc: ["About Us", "Latest Posts", "Contact Us", "Shop"],
  },
  {
    title: "Help Links",
    desc: ["Tracking", "Order Status", "Delivery", "Shipping Info", "FAQ"],
  },
  {
    title: "Useful Links",
    desc: ["SpecialOfferse", "GiftCards", "Advertising", "Terms of Use"],
  },
  {
    title: "Get in the know",
    desc: [""],
    isNewsLetter: true,
  },
];

// NavBar Links Data (NavBar.tsx)
export const NavLinksArray = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "About", to: "/about" },
  { name: "Contact Us", to: "/contactus" },
];

export const NavLinkReactIcons = [
  { name: <FiUser />, to: "/profile" },
  { name: <IoBagRemoveOutline />, to: "/cart", showsCartItemsNumber: true },
];