import React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";

import colorPalette from "../config/colorPalette";
import Icon from "./Icon";

function ListItem({ image, title, subTitle, name, name2 }) {
  return (
    <Pressable>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={{ uri: image }} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}> {title}</Text>
          <Text style={styles.subTitle}> {subTitle}</Text>
          {Icon && <Icon name={name} />}
          {Icon && <Icon name={name2} />}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.lavender,
    overflow: "hidden",
    marginBottom: 10,
    borderRadius: 15,
    margin: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "900",
    color: colorPalette.blushRed,
  },
  subTitle: {
    fontWeight: "400",
    color: colorPalette.blushRed,
  },
});

export default ListItem;
