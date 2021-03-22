import { Platform } from "react-native";
import { ANDROIDFONT, IOSFONT } from "../../concepts/font.family.enum";
import { colors } from "./Common-Resources.props";

export default {
  colors,
  text: {
    color: colors.DARK,
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? IOSFONT.AVENIR : ANDROIDFONT.ROBOTO,
  },
};
