import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "900", fontStyle: "italic" }}>
        Welcome Screen
      </Text>
      <Button title="login" submit={() => navigation.navigate("login")} />
    </View>
  );
}

export default WelcomeScreen;
