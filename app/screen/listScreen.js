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
import useApi from "../hooks/useApi";

function ListScreen(props) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  // const {
  //   data: listing,
  //   error,
  //   request: loadlistings,
  // } = useApi(listingApi.getListing);

  useEffect(() => {
    loadlistings();
  }, []);

  const loadlistings = async () => {
    const res = await listingApi.getListing();
    if (!res.ok) return setError(true);
    setError(false);
    setListings(res.data);
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
        data={listings}
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
