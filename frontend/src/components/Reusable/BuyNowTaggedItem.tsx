import { BuyNoTaggedItemProp } from "../../@types/types";
const BuyNowTaggedItem: React.FC<BuyNoTaggedItemProp> = ({
  img,
  setHoverButton,
  hoverButton,
  uniqueID,
}) => {
  return (
    <div className="h-[400px] w-[400px] relative shadow-sm hover:shadow-xl duration-200 sm:max-md:h-[300px] sm:max-md:w-[300px] ">
      <img
        src={img}
        alt=""
        className={`${
          hoverButton === uniqueID ? "grayscale-0 duration-300" : "grayscale"
        }`}
      />
      <button
        className={
          "absolute bottom-[10px] right-[10px] bg-white dark:bg-black dark:border-[1px] dark:text-white text-etBlue rounded-xl px-6 py-2 font-semibold uppercase"
        }
        onMouseEnter={() => {
          setHoverButton(uniqueID);
        }}
        onMouseLeave={() => setHoverButton(null)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNowTaggedItem;
