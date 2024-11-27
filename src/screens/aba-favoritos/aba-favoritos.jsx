import { FlatList, View, Image, Text } from "react-native";
import Restaurante from "../../components/restaurante/restaurante";
import {restaurantes} from "../../constants/dados.js"
import icons from "../../constants/icons";
import { styles } from "./aba-favoritos.style";

function AbaFavoritos(){
    return <View style={styles.container}>
        <FlatList data={restaurantes}
        keyExtractor={(restaurante) => restaurante.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return <Restaurante nome={item.nome}
            endereco={item.endereco}
            logotipo={item.logotipo}
            icone={icons.remove}/>       
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
export default AbaFavoritos;