import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { colors } from "../config/Common-Resources.props";

import ListItem from "../components/ListItem/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import Screen from "../components/Screen";

interface dMessageItem {
  id: number;
  title: string;
  description: string;
  image: any;
}

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/Saurabh-2.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/Saurabh.jpeg"),
  },
];
function MessagesScreen(props: any) {
  const [messageItems, setMessageItems] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messageItem: dMessageItem) => {
    // Delete the message from messages
    const newMessageItems = messageItems.filter((m) => m.id !== messageItem.id);
    setMessageItems(newMessageItems);
  };
  return (
    <Screen>
      <FlatList
        data={messageItems}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected is ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessageItems(initialMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
