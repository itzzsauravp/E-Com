import { ReactElement } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const RatingStart: React.FC<{ rating: number | undefined }> = ({ rating }) => {
  const totalStars = 5;
  const renderStars = () => {
    const stars: ReactElement[] = [];
    if (!rating) {
      return Array.from({ length: 5 }, (_, index) => (
        <FaRegStar key={index} className="text-slate-400 w-6 h-6" />
      ));
    }
    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500 w-6 h-6" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-500 w-6 h-6" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500 w-6 h-6" />);
      }
    }
    return stars;
  };

  return <div className="flex mt-2">{renderStars()}</div>;
};

export default RatingStart;
