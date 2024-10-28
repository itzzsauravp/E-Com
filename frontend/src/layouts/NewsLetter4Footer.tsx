import { FaChevronRight } from "react-icons/fa";
const NewsLetter4Footer = () => {
  return (
    <div className="sm:max-md:mt-8">
      <div className="font-lato capitalize flex items-center gap-3 mt-7 sm:max-md:mt-2">
        <input
          type="text"
          className="outline-none border-b-2 border-black dark:border-white p-2 bg-transparent"
          placeholder="Enter Email"
        />
        <button>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter4Footer;
