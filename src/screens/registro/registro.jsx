import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";

function Registro() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header texto="Criar sua conta!" />

        <View style={styles.formGroup}>
          <View style={styles.form}>
            <TextBox label="Nome Completo" placeholder="Informe seu nome" />
          </View>

          <View style={styles.form}>
            <TextBox label="E-mail" placeholder="Informe seu E-mail!" />
          </View>

          <View style={styles.form}>
            <TextBox
              label="Escolha uma senha"
              isPassword={true}
              placeholder="Informar senha!"
            />
          </View>

          <View style={styles.form}>
            <TextBox
              label="Confirme sua senha!"
              isPassword={true}
              placeholder="Confirmar senha!"
            />
          </View>

          <View>
            <Button texto="Próximo Passo" />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Acessar minha conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Registro;
