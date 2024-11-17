import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Registro(props) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header texto="Criar sua conta!" />

          <View style={styles.formGroup}>
            <View style={styles.form}>
              <TextBox
                label="Nome Completo"
                placeholder="Informe seu nome"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="E-mail"
                placeholder="Informe seu E-mail!"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="Escolha uma senha"
                isPassword={true}
                placeholder="Informar senha!"
                onChangeText={(texto) => setSenha1(texto)}
                value={senha1}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="Confirme sua senha!"
                isPassword={true}
                placeholder="Confirmar senha!"
                onChangeText={(texto) => setSenha2(texto)}
                value={senha2}
              />
            </View>

            <View>
              <Button
                texto="Próximo Passo"
                onPress={() => props.navigation.navigate("registro2")}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/*      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
          <Text style={styles.footerText}>Acessar minha conta</Text>
        </TouchableOpacity>
      </View>
*/}
    </>
  );
}

export default Registro;
