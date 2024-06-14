import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "./pages/WelcomePage";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
