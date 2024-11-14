import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/login.jsx";
import Registro from "./screens/registro/registro.jsx";
import Registro2 from "./screens/registro/registro.jsx";


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="registro" component={Registro} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
