import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
       flex: 1,
       backgroundColor: COLORS.white,      
    },

    icone:{
        width: 35,
        height: 35,        
    },

    more:{
        width: 25,
        height: 25,        
    },

    item:{
        flexDirection: "row",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        
    },

    textos:{
        flex: 1,
        marginLeft: 10,
    },
    containerIcone:{
        justifyContent: "center",                
    },

    titulo:{
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        marginBottom: 5,
    },

    subtitulo:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.medium_gray,
    },

    borderTop:{
        borderTopWidth: 1,
        borderTopColor: COLORS.gray,        
    }

}