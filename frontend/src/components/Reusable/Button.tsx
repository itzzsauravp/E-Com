interface ButtonProps {
  value: string;
  bgColor: string;
  txtColor: string;
  px: number;
  py: number;
  mt: number;
  mb?: number;
  func?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  value,
  bgColor,
  txtColor,
  px,
  py,
  mt,
  mb,
  func,
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
  };

  return (
    <div>
      <button
        style={buttonStyle}
        className="uppercase"
        onClick={() => func && func()}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
