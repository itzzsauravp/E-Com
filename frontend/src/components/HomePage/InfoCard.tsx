interface Items {
  icon: React.ReactElement;
  title: string;
  desc: string;
};

interface InfoCardProps {
  item: Items;
};

// This means that the InfoCard component is typed as a functional component
// and expects a type of InfoCardProps as a prop
const InfoCard: React.FC<InfoCardProps> = ({ item }) => {
  return (
    <div className="w-1/4 flex gap-5 sm:max-md:w-full border-2 py-10 px-2 rounded-md border-etBlue cursor-pointer justify-center">
      <div className="text-etBlue text-3xl mt-1">{item.icon}</div>
      <div>
        <h1 className="text-tDark">{item.title}</h1>
        <p className="text-tLight">{item.desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
