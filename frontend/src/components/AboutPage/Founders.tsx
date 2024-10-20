import founder1 from "../../assets/Images/founder1.jpg";
import founder2 from "../../assets/Images/founder2.jpg";
import founder3 from "../../assets/Images/founder3.jpg";
import founder4 from "../../assets/Images/founder4.jpg";

interface FounderArray {
  photo: string;
  name: string;
}

const Founders = () => {
  const foundersArray: Array<FounderArray> = [
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
