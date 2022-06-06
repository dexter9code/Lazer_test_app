import React from "react";
import { StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import colorPalette from "../config/colorPalette";

function Button({ submit, title, width = "50%" }) {
  return (
    <TouchableOpacity onPress={submit} style={[styles.container, { width }]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: colorPalette.primary,
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "800",
  },
});

export default Button;
