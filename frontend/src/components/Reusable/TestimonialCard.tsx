import { Data } from "../../@types/types";
import apos from "../../assets/Images/apos.png";
const TestimonialCard: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center border-[1px] dark:border-slate-500 rounded-md gap-5 w-[80%] p-4 sm:max-md:w-full">
      <div className="p-2 h-56 w-56 sm:max-md:p-0 sm:max-md:h-32 sm:max-md:w-32">
        <img src={data.photo} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="w-[80%] m-auto text-center relative">
        <div className="abolute">
          <img src={apos} alt="" className="sm:max-md:hidden" />
        </div>
        <p className="text-tLight font-bold dark:text-slate-500">{data.desc}</p>
        <p className="mt-5 font-semibold"> - {data.name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
