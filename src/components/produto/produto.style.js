import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    produto:{
        width: "100%",
       flexDirection: "row",
       marginBottom: 10,
       marginTop: 10,      
        
    },

    foto:{
        width: 80,
        height: 80,
        borderRadius: 20,
    },

    textos:{
       flex: 1,
       padding: 10,        
    },

    nome:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,       
     },

     descricao:{
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm,       
     },

     valor:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
        marginTop: 8,
        fontWeight: "bold",      
     },

     delete:{
      width: 30,
      height: 30,
      borderRadius: 20,
     },

     containerDelete:{
      alignItems: "flex-end",
      marginTop: 8,
     }
}