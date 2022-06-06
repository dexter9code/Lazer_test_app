import React from "react";
import { View, Text } from "react-native";

function AccountScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ fontSize: 40, fontWeight: "bold", textTransform: "uppercase" }}
      >
        ACCOUNT SCREEN
      </Text>
    </View>
  );
}

export default AccountScreen;
