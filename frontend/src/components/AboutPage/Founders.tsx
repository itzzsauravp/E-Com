import { foundersArray } from "../../data/staticData";
const Founders = () => {
  return (
    <div className="bg-eSmoke">
      <h1 className="text-center mb-16 text-3xl text-tDark font-lato font-bold">
        The Founders
      </h1>
      <div className="flex flex-wrap justify-center gap-5 sm:max-md:items-center ">
        {foundersArray.map((founder, index) => (
          <div
            key={index}
            className="border-2 p-2 rounded-md h-fit w-56 shadow-md hover:shadow-lg sm:max-md:w-44"
          >
            <img
              src={founder.photo}
              alt=""
              className="h-56 w-full object-cover "
            />
            <h1 className="font-semibold text-center">{founder.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
