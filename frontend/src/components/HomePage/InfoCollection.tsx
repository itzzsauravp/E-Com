import InfoCard from "./InfoCard";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLifeRing } from "react-icons/fa";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { FaFingerprint } from "react-icons/fa";
const InfoCollection = () => {
  const infoCollectionArray = [
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

  return (
    <div className="grid grid-cols-4 gap-5 w-full mt-12 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
      {infoCollectionArray.map((item, index) => (
        <InfoCard item={item} key={index} />
      ))}
    </div>
  );
};

export default InfoCollection;
