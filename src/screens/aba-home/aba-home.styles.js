import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },

  destaque:{
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold'
  },

  logo: {
    width: 140,
    height: 24,
  },

  cart: {
    width: 30,
    height: 30,
  },

  headerBar:{
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  busca:{
    marginBottom: 10,

  },
};
