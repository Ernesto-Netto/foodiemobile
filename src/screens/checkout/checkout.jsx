import { TouchableOpacity, View, Image, Text, FlatList} from "react-native";
import { styles } from "./checkout.style"; 
import icons from "../../constants/icons";
import { pedido } from "../../constants/dados.js";
import Produto from "../../components/produto/produto";
import Button from "../../components/button/button";
 
 function Checkout(props){

function ClickDelete(){
    alert("ok!")
}

    return <View style={styles.container}>

        <FlatList data={pedido.itens}
        keyExtractor={(item) => item.idItem}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Produto key={item.idItem}
            foto={item.foto}
            nome={item.nome}
            descricao={item.descricao}
            valor={item.vlTotal}
            onClickDelete={ClickDelete}
            />
        }}/>

        <View>
            <View style={styles.valores}>
                <Text style={styles.total}>Resumo dos Valores</Text>
            </View>
            <View style={styles.valores}>
                <Text style={styles.valor}>Subtotal</Text>
                <Text style={styles.valor}>R$ 66,00</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Taxa de Entrega</Text>
                <Text style={styles.valor}>R$ 5,00</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>R$ 71,00</Text>
            </View>

        </View>

        <View style={styles.containerBtn}>
            <Button texto="Finalizar Pedido" />
        </View>

    </View>
 }

 export default Checkout;