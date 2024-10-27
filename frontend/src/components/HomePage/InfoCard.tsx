import { Items } from "../../@types/types";
const InfoCard: React.FC<{item: Items }> = ({ item }) => {
  return (
    <div className="w-full flex gap-5 sm:max-md:w-full border-2 py-10 px-2 rounded-md border-etBlue cursor-pointer justify-center">
      <div className="text-etBlue text-3xl mt-1">{item.icon}</div>
      <div>
        <h1 className="text-tDark">{item.title}</h1>
        <p className="text-tLight">{item.desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
