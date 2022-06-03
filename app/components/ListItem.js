import React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";

import colorPalette from "../config/colorPalette";

function ListItem({ image, title }) {
  return (
    <Pressable>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}> {title}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colorPalette.lavender,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 15,
    justifyContent: "center",
  },
  title: {
    fontWeight: "900",
    color: colorPalette.blushRed,
  },
});

export default ListItem;
