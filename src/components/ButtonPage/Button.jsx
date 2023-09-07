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
  hoverState,
  hoverProp,
  disabled,
  ml,
}) => {
  return (
    <div className="flex flex-col justify-between gap-y-3">
      <p
        className={`ubuntu-mono font-normal text-text1 text-xs my-3 ${titleColor}`}
      >
        {titleText}
      </p>
      <div>
        <button
          className={`flex flex-row rounded-md text-sm ${padding} ${border} ${fontWeight} ${btnBackground} ${btnTextColor} ${
            hoverState ? hoverProp : ""
          }`}
          disabled={disabled}
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
    </div>
  );
};

export default Button;
