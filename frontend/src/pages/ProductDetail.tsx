import RatingStart from "../components/Reusable/RatingStart";
import Button from "../components/Reusable/Button";
import DescAndReview from "../components/ProductDetailPage/DescAndReview";
import { useLocation } from "react-router-dom";
import useCart from "../hooks/useCart";
const SIZE = [
  "Select Size",
  "Small (s)",
  "Medium (m)",
  "Large (l)",
  "Extra Large (xl)",
];

const ProdDetails = [
  { name: "Category", value: "Women, Polo, Casual" },
  { name: "Tags", value: "Modern, Design, cotton" },
];

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state.product;
  const { cart, addToCart } = useCart();
  console.log(cart);
  return (
    <section>
      <div className="flex gap-24 mt-12">
        <div className="h-[500px] w-[400px] bg-slate-500">
          <img src={product.image} alt="" className="h-full w-full" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold font-lato mb-5 ">
            {product.title}
          </h1>
          <RatingStart rating={product.rating.rate} />
          <p className="mt-5 text-2xl">
            <span className="line-through text-tLight">
              ${(product.price + 10).toFixed(2)}
            </span>{" "}
            <span className="text-etBlue">${product.price}</span>
          </p>
          <p className="mt-4">{product.description}</p>
          {product.category !== "electronics" && (
            <select name="" id="" className="p-2 bg-eSmokePlus mt-10">
              {SIZE.map((_, index) => (
                <option key={index} className="bg-white">
                  {_}
                </option>
              ))}
            </select>
          )}
          <Button
            value="Add to Cart"
            bgColor="#024E82"
            txtColor="white"
            px={2}
            py={1}
            mt={2}
            func={() => addToCart(product)}
          />
          <div className="mt-5">
            {ProdDetails.map((_, index) => (
              <p key={index} className="text-tLight">
                <span className="text-tDark font-semibold">{_.name}:</span>{" "}
                {_.value}
              </p>
            ))}
          </div>
        </div>
      </div>
      <DescAndReview />
    </section>
  );
};

export default ProductDetail;
