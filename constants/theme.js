export const COLORS = {
  //button and fields background colors
  buttonPrimaryLight: "#F1F5F9",
  buttonPrimaryMedium: "#156FD7",
  textPrimary: "black",
  textSecondary: "gray"


};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  //all avenir
  extraBold: "Avenir-Black",
  bold: "Avenir-Heavy",
  medium: "Avenir-Medium",
  regular: "Avenir-Book",
  light: "Avenir-Light",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
