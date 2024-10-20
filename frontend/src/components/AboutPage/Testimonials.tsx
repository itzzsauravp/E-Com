import TestimonialCard from "../Reusable/TestimonialCard";
import testimonial1 from "../../assets/Images/testimonial1.png";
import testimonial2 from "../../assets/Images/testimonial2.png";
import testimonial3 from "../../assets/Images/testimonial3.png";

interface TestimonialArray {
  photo: string;
  desc: string;
  name: string;
}

const Testimonials = () => {
  const testimonialArray: Array<TestimonialArray> = [
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

  return (
    <div>
      <h1 className="text-center mt-16 mb-16 text-3xl text-tDark font-lato font-bold">
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
