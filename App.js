import ListScreen from "./app/screen/listScreen";
import { NavigationContainer } from "@react-navigation/native";

import AccountScreen from "./app/screen/AccountScreen";
import LoginScreen from "./app/screen/LoginScreen";
import AuthNavigator from "./app/routes/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
