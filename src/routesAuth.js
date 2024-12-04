import Busca from "./screens/busca/busca.jsx"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/principal/principal";
import Cardapio from "./screens/cardapio/cardapio";
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido.jsx";
import Checkout from "./screens/checkout/checkout.jsx";
import { TouchableOpacity } from "react-native";
import { COLORS } from "./constants/theme.js";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

      <Stack.Screen
          name="principal"
          component={Principal}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{ 
            headerShadowVisible: false,
            title: "Meu Pedido",
            headerTitleAlign: "center",
            headerBackTitle: "Voltar",
            animation:"slide_from_bottom",
            headerRight: () => {
              return <TouchableOpacity onPress={() => alert("OK!")}>
                <Text style={{color: COLORS.red}}>Limpar</Text>
              </TouchableOpacity>
            }
          }}/>

      <Stack.Screen
          name="detalhe-pedido"
          component={DetalhePedido}
          options={{ 
              headerShadowVisible: false,
              title: "Detalhes do Pedidos",
              headerTitleAlign: "center",
              headerBackTitle: "Voltar",
              animation:"slide_from_bottom"
            }}
        />

      <Stack.Screen
          name="detalhe-produto"
          component={DetalheProduto}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="cardapio"
          component={Cardapio}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
        name="busca"
        component={Busca}
        options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesAuth;

/*
import Perfil from "./screens/perfil/perfil.jsx";
import Pedidos from "./screens/pedidos/pedidos.jsx";
import Login from "./screens/login/login.jsx";
import Registro from "./screens/registro/registro.jsx";
import Registro2 from "./screens/registro2/registro2.jsx";
import Favoritos from "./screens/favoritos/favoritos.jsx";
import Home from "./screens/home/home.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        
      <Stack.Screen
          name="perfil"
          component={Perfil}
          options={{
            headerShown: true,
          title:"Meu Perfil",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
        />


      <Stack.Screen
          name="pedidos"
          component={Pedidos}
          options={{
            headerShown: true,
          title:"Meus Pedidos",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
        />

      <Stack.Screen
          name="favoritos"
          component={Favoritos}
          options={{
            headerShown: true,
          title:"Favoritos",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
        />
      <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="registro"
          component={Registro}
          options={{
            //headerShown: false
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="registro2"
          component={Registro2}
          options={{
            //headerShown: false
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
*/
