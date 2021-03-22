import { Card } from "../components/Card/Card";
import Screen from "../components/Screen";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { colors } from "../config/Common-Resources.props";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for Sale",
    price: 200,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props: any) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.LIGHT,
  },
});
export default ListingsScreen;
