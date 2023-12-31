const buttonCommonProps = {
  titleColor: "text-text1",
  btnTextColor: "text-button-default",
  padding: "px-4 py-2",
  fontWeight: "font-medium",
  border: "border-none",
};

const buttonStyles = {
  buttonDefault: {
    ...buttonCommonProps,
    titleText: "<Button />",
    btnBackground: "bg-default",
    hoverState: true,
    hoverProp: "hover:bg-button-hover",
  },
  buttonDefaultHoverFocus: {
    ...buttonCommonProps,
    titleColor: "text-text2",
    titleText: "&:hover, &:focus",
    btnBackground: "bg-button-hover",
  },
  buttonOutline: {
    ...buttonCommonProps,
    padding: "px-5 py-2",
    titleText: "<Button variant='outline' />",
    btnBackground: "bg-white",
    border: "border-blue",
  },
  buttonOutlineHover: {
    ...buttonCommonProps,
    padding: "px-5 py-2",
    titleColor: "text-text2",
    titleText: "&:hover, &:focus",
    btnBackground: "bg-white",
    border: "border-blue",
  },
  buttonDisabledShadow: {
    ...buttonCommonProps,
    titleText: "<Button disableShadow />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
    fontWeight: "font-normal",
  },
  buttonDisabled: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button disabled />",
    btnBackground: "bg-default",
    btnTextColor: "text-nav-default",
    fontWeight: "font-normal",
    disabled: true,
  },
  buttonDisabledVariant: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button disableShadow />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
    fontWeight: "font-normal",
  },
  buttonStartIcon: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button startIcon=”local_grocery_store” />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
    fontWeight: "font-normal",
    cartIconBool: true,
    cartIconPoisition: "start",
  },

  buttonEndIcon: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button endtIcon=”local_grocery_store” />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
    cartIconBool: true,
    cartIconPoisition: "end",
  },

  buttonSizeSM: {
    ...buttonCommonProps,
    padding: "px-3 py-1.5",
    titleColor: "text-black",
    titleText: "<Button size=”sm” />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
  },

  buttonSizeMD: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button size=”md” />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
  },

  buttonSizeLG: {
    ...buttonCommonProps,
    padding: "px-6 py-2.5",
    titleColor: "text-black",
    titleText: "<Button size=”lg” />",
    btnBackground: "bg-primary-default",
    btnTextColor: "text-white",
  },
  buttonSecondary: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button color=”secondary” />",
    btnBackground: "bg-secondary-default",
    btnTextColor: "text-white",
    btnText: "Secondary",
  },
  buttonDanger: {
    ...buttonCommonProps,
    titleColor: "text-black",
    titleText: "<Button color=”danger” />",
    btnBackground: "bg-danger-default",
    btnTextColor: "text-white",
    btnText: "Danger",
  },
  buttonDisabledShadowPrimary: {
    ...buttonCommonProps,
    titleColor: "text-white",
    titleText: "no-title",
    btnBackground: "bg-primary-hover",
    btnTextColor: "text-white",
    btnText: "Secondary",
  },
  buttonSecondaryHoverFocus: {
    ...buttonCommonProps,
    titleColor: "text-white",
    titleText: "no-title",
    btnBackground: "bg-secondary-hover",
    btnTextColor: "text-white",
    btnText: "Secondary",
  },
  buttonDangerHoverFocus: {
    ...buttonCommonProps,
    titleColor: "text-white",
    titleText: "no-title",
    btnBackground: "bg-danger-hover",
    btnTextColor: "text-white",
    btnText: "Danger",
  },
};

const buttonsArr = [
  [buttonStyles.buttonDefault, buttonStyles.buttonDefaultHoverFocus],
  [buttonStyles.buttonOutline, buttonStyles.buttonOutlineHover],
  [buttonStyles.buttonDisabledShadow],
  [buttonStyles.buttonDisabled, buttonStyles.buttonDisabledVariant],
  [buttonStyles.buttonStartIcon, buttonStyles.buttonEndIcon],
  [
    buttonStyles.buttonSizeSM,
    buttonStyles.buttonSizeMD,
    buttonStyles.buttonSizeLG,
  ],
  [
    buttonStyles.buttonDefault,
    buttonStyles.buttonDisabledShadow,
    buttonStyles.buttonSecondary,
    buttonStyles.buttonDanger,
  ],
  [
    buttonStyles.buttonDefault,
    buttonStyles.buttonDisabledShadowPrimary,
    buttonStyles.buttonSecondaryHoverFocus,
    buttonStyles.buttonDangerHoverFocus,
  ],
];

export default buttonsArr;
