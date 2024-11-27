import { FlatList, View, Image, Text } from "react-native";
import {pedidos} from "../../constants/dados.js"
import icons from "../../constants/icons.js";
import { styles } from "./aba-pedidos.style.js";
import Pedido from "../../components/pedido/pedido.jsx";

function AbaPedidos(){
    return <View style={styles.container}>
        <FlatList data={pedidos}
        keyExtractor={(pedido) => pedido.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Pedido 
            logotipo={item.logotipo}
            nome={item.nome}
            valor={item.vl_total}
            dataPedido={item.dataPedido}
            status={item.status}
            />       
        }}

        contentContainerStyle={styles.containerList}

        ListEmptyComponent={() => {
            return <View style={styles.empty}>
                <Image source={icons.empty}/>
                <Text style={styles.emptyTest}>Nenhum Favorito encontrado!</Text>
                
            </View>
        }}
        />
    </View>
}
export default AbaPedidos;