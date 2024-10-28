import TestimonialCard from "../Reusable/TestimonialCard";
import { testimonialArray } from "../../data/staticData";
const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center mt-16 mb-16 text-3xl text-tDark dark:text-white font-lato font-bold">
        Testimonials
      </h1>
      <div className="flex flex-col flex-wrap items-center gap-2 p-4">
        {testimonialArray.map((data, index) => (
          <TestimonialCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
