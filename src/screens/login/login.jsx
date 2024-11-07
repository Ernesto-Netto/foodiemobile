import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx"

function Login() {
  return (
    <View style={styles.container}>
      <Header texto="Acesse sua conta!" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="E-mail" placeholder="Informe seu E-mail!" />
        </View>

        <View style={styles.form}>
          <TextBox
            label="Senha"
            isPassword={true}
            placeholder="Informe sua senha!"/>
        </View>

        <View>
            <Button texto="Acessar"/>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
        <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
