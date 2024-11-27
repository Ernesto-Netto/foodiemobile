import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbaHome from "../aba-home/aba-home.jsx";
import AbaFavoritos from "../aba-favoritos/aba-favoritos.jsx";
import AbaPedidos from "../aba-pedidos/aba-pedidos.jsx";
import AbaPerfil from "../aba-perfil/aba-perfil.jsx";
import { Image } from "react-native";
import icons from "../../constants/icons.js";

const Tab = createBottomTabNavigator();


function Principal(){
    return <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
    <Tab.Screen name="home" component={AbaHome}
    options={{
        headerShown: false,
        tabBarIcon: ({focused}) => {
            return <Image source={icons.abaHome}
            style={{width: 25, height: 25, opacity: focused ? 1 : 0.5}}/>
        }
    }}
    />
    <Tab.Screen name="favoritos" component={AbaFavoritos}
    options={{
        title: "Favoritos",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarIcon: ({focused}) => {
            return <Image source={icons.abaFavoritos}
            style={{width: 25, height: 25, opacity: focused ? 1 : 0.5}}/>
        }
    }}/>
    <Tab.Screen name="pedidos" component={AbaPedidos}
    options={{
        title: "Meus Pedidos",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarIcon: ({focused}) => {
            return <Image source={icons.abaPedido}
            style={{width: 25, height: 25, opacity: focused ? 1 : 0.5}}/>
        }
    }}/>
    <Tab.Screen name="perfil" component={AbaPerfil}
    options={{
        title: "Meu Perfil",
        headerTitleAlign: "center",
        headerShadowVisible: false,
        tabBarIcon: ({focused}) => {
            return <Image source={icons.abaPerfil}
            style={{width: 25, height: 25, opacity: focused ? 1 : 0.5}}/>
        }
    }}/>
</Tab.Navigator>
}

export default Principal;