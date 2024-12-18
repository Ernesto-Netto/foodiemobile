import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./aba-perfil.style";
import icons from "../../constants/icons";

function AbaPerfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View style={styles.containerIcone}>
          <Image source={icons.endereco} style={styles.icone} />
        </View>

        <View style={styles.textos}>
            <Text style={styles.titulo}>Enderço</Text>
            <Text style={styles.subtitulo}>Meu Enderço de entrega</Text>

        </View>

        <View style={styles.containerIcone}>
          <Image source={icons.expandir} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.dados} style={styles.icone} />
        </View>

        <View style={styles.textos}>
            <Text style={styles.titulo}>Meus Dados</Text>
            <Text style={styles.subtitulo}>Informações da minha conta</Text>

        </View>

        <View style={styles.containerIcone}>
          <Image source={icons.expandir} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.logout} style={styles.icone} />
        </View>

        <View style={styles.textos}>
            <Text style={styles.titulo}>Desconectar</Text>
            <Text style={styles.subtitulo}>Desconectar seu usuário desse aparelho</Text>

        </View>

        <View style={styles.containerIcone}>
          <Image source={icons.expandir} style={styles.more} />
        </View>
      </TouchableOpacity>
    </View>    
  );
}

export default AbaPerfil;
