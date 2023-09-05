import CartIcon from "./CartIcon";

const Button = ({
  titleColor,
  titleText,
  btnBackground,
  btnTextColor,
  fontWeight,
  border,
  padding,
  cartIconBool,
  cartIconPoisition,
  btnText,
}) => {
  return (
    <div
      className={`min-mr-18-12  ml-40 ${
        cartIconPoisition === "end" && `ml-80`
      }`}
    >
      <p
        className={`ubuntu-mono font-normal text-text1 text-xs my-3 ${titleColor}`}
      >
        {titleText}
      </p>
      <button
        className={`flex flex-row rounded-md text-sm ${padding} ${border} ${fontWeight} ${btnBackground} ${btnTextColor}`}
      >
        {cartIconPoisition === "start" && (
          <CartIcon cartIconBool={cartIconBool} margin="mr-2" />
        )}
        {btnText ? btnText : "Default"}
        {cartIconPoisition === "end" && (
          <CartIcon cartIconBool={cartIconBool} margin="ml-2" />
        )}
      </button>
    </div>
  );
};

export default Button;
