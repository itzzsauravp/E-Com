import InfoCard from "./InfoCard";
import { infoCollectionArray } from "../../data/staticData";
const InfoCollection = () => {
  return (
    <div className="grid grid-cols-4 gap-5 w-full mt-12 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
      {infoCollectionArray.map((item, index) => (
        <InfoCard item={item} key={index} />
      ))}
    </div>
  );
};

export default InfoCollection;
