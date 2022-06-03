import React from "react";
import { StyleSheet, View, StatusBar, Text, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const data = [
  {
    id: 54,
    title: "Harry Potter",
    image: require("../assets/images/harrypotter.jpg"),
  },
  {
    id: 86,
    title: "John Wick",
    image: require("../assets/images/johnwick.jpg"),
  },
  { id: 23, title: "Duraken", image: require("../assets/images/duraken.jpg") },
];

function ListScreen(props) {
  return (
    <View styles={styles.container}>
      <StatusBar styles="auto" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem title={item.title} image={item.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ListScreen;
