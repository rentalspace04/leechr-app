export const colors = {
  red: {
    main: "#d62a1e",
    highlight: "#e33327",
    lowlight: "#a81e14"
  },
  background: {
    main: "#e4e4ed",
    main_high: "#eaeaf4",
    main_high2: "#ededf8",
    main_old: "#7a7a8c",
    highlight: "#adadba",
    lowlight: "#565663",
    darkblue: "#2c446b"
  },
  text: {
    main: "#353536",
    positive: "#00b006",
    negative: "#ff0044"
  }
};

export const moneyColor = amount => {
  if (amount === 0) {
    return colors.text.main;
  }

  return amount > 0 ? colors.text.positive : colors.text.negative;
};

export default colors;
