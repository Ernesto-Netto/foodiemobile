import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx"
import { useState } from "react";

function Login() {

  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");


  function ProcessarLogin(){
    setEmail("1234...");

  }


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

        <View style={styles.form}>
            <Button texto="Acessar" onPress={ProcessarLogin}/>
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
