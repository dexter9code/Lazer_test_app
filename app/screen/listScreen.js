import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  FlatList,
  Button,
} from "react-native";

import ListItem from "../components/ListItem";
import listingApi from "../api/listings";
const data = [
  {
    id: 54,
    name: "Harry Potter",
    image: require("../assets/images/harrypotter.jpg"),
  },
  {
    id: 86,
    name: "John Wick",
    image: require("../assets/images/johnwick.jpg"),
  },
  { id: 23, name: "Duraken", image: require("../assets/images/duraken.jpg") },
];

function ListScreen(props) {
  const [listing, setListing] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadlistings();
  }, []);

  const loadlistings = async () => {
    const res = await listingApi.getListing();
    if (!res.ok) return setError(true);
    setError(false);
    setListing(res.data);
  };
  return (
    <View styles={styles.container}>
      <StatusBar styles="auto" />
      {error && (
        <>
          <Text>Server is Down right Now</Text>
          <Button title="Reload" onPress={loadlistings} />
        </>
      )}
      <FlatList
        data={listing}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.job}
            name="email"
            name2="phone"
            image={item.image}
          />
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
