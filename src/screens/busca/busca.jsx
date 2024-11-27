import { styles } from "./busca.style.js";
import { View, Image } from "react-native";
import { FlatList } from "react-native";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import { restaurantes } from "../../constants/dados.js";
import icons from "../../constants/icons.js";

function Busca(){
    return <View style={styles.container}>
        <FlatList data={restaurantes}
        keyExtractor={(restaurante) => restaurante.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Restaurante nome={item.nome}
            endereco={item.endereco}
            logotipo={item.logotipo}
            icone={icons.favoritoFull}/>       
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

export default Busca;