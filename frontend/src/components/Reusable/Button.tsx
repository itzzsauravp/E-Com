import { ButtonProps } from "../../@types/types";
const Button: React.FC<ButtonProps> = ({
  value,
  bgColor,
  txtColor,
  px,
  py,
  mt,
  mb,
  func,
  border,
  uppercase,
}) => {
  // tDark: "#1D1D1D",
  // tLight: "#555555",
  // eSmoke: "#FBFBFB",
  // eSmokePlus: "#E8E8E8",
  // etBlue: "#024E82",
  const buttonStyle = {
    background: bgColor,
    color: txtColor,
    padding: `${py}em ${px}em`,
    coursor: "poniter",
    marginTop: `${mt}em`,
    marginBottom: `${mb}em`,
    border: `${border}`,
  };

  return (
    <div>
      <button
        style={buttonStyle}
        className={uppercase ? "uppercase" : undefined}
        onClick={() => func && func()}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
