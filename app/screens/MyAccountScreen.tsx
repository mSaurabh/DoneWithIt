import React from "react";
import { FlatList, View, StyleSheet, Image, Text } from "react-native";
import Icon from "../components/AppIcon/Icon";

//TODO:Check out the link https://stackoverflow.com/questions/43281741/how-to-use-paths-in-tsconfig-json for mapping paths
import { colors } from "../config/Common-Resources.props";
import ListItem from "../components/ListItem/ListItem";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import Screen from "../components/Screen";

function MyAccountScreen() {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.PRIMARY,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.SECONDARY,
      },
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Saurabh Mankar"}
          subTitle={"mankar.saurabh@gmail.com"}
          image={require("../assets/Saurabh-2.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title={"Log out"}
        IconComponent={<Icon name={"logout"} backgroundColor="gold" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.LIGHT,
  },
});
export default MyAccountScreen;
