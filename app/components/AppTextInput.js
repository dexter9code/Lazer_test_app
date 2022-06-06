import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colorPalette from "../config/colorPalette";

function AppTextInput({ icon, width = "100%", ...others }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput placeholderTextColor={colorPalette.blueDiamond} {...others} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 15,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
