import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
       flex: 1,
       backgroundColor: COLORS.white,       
    },

    containerFoto:{
        alignItems: "center"
    },

    foto:{
        height: 200,
    },

    back:{
        height: 40,
        width: 40,
    },

    containerBack:{
        position:"absolute",
        top: 35,
        left: 15,
    },

    header:{
        width: "100%",
        flexDirection: "row",
        padding: 10,
    },

    headerTextos:{
        flex:1,
    },

    nome:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 3,
    },

    descricao:{
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    },

    valor:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginTop: 15,
    },

    headerObs:{
        width: "100%",
        padding: 10,
    },

    multiline:{
        flex: 1,
        backgroundColor: COLORS.ligth_gray,
        padding: 10,
        color: COLORS.dark_gray,
        borderRadius: 3,

        borderWidth: 1,
        borderColor: COLORS.dark_gray,
        minHeight: 120,
        textAlgnVertical: "top",
    },

    footer:{
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        padding: 10,
        textAlign: "center",
    },

    imgQtd:{
        height: 40,
        width: 40,
    },

    qtd:{
        fontSize: FONT_SIZE.lg,
        color: COLORS.dark_gray,
        width: 35,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
    },

    footerBtn:{
        flex: 1,
        marginRight: 5,
        marginLeft: 15,
        marginBottom: 15,
    }
}