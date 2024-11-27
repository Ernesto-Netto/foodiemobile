import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    pedido:{
       flexDirection: "row",
       marginBottom: 10,
       marginTop: 10,      
        
    },

    logotipo:{
        width: 80,
        height: 80,
        borderRadius: 20,
    },

    textos:{
        flex: 1,
        padding: 8,

    },

    containerValor:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10, 
    },

    valor:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
    },

    status:{
        color: COLORS.green,
        marginTop: 10, 
    }


}