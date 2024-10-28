import { foundersArray } from "../../data/staticData";
const Founders = () => {
  return (
    <div className="bg-eSmoke dark:bg-slate-900 p-4">
      <h1 className="text-center mb-16 text-3xl text-tDark dark:text-white font-lato font-bold">
        The Founders
      </h1>
      <div className="flex flex-wrap justify-center gap-5 sm:max-md:items-center ">
        {foundersArray.map((founder, index) => (
          <div
            key={index}
            className="border-[1px] dark:border-slate-500 p-2 rounded-md h-fit w-56 shadow-md hover:shadow-lg sm:max-md:w-44"
          >
            <img
              src={founder.photo}
              alt=""
              className="h-56 w-full object-cover "
            />
            <h1 className="font-semibold text-center dark:text-white">{founder.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
