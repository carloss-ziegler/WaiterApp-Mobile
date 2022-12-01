import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { Main } from "./src/Main";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("./assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Main}
        />
      </Drawer.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
