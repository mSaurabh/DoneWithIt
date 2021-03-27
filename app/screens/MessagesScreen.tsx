import React, { useState } from "react";
import { FlatList } from "react-native";

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
    title:
      "This is a long title that is going to distort the screen really bad and hence we need to fix this.This is a long title that is going to distort the screen really bad and hence we need to fix this.This is a long title that is going to distort the screen really bad and hence we need to fix this.This is a long title that is going to distort the screen really bad and hence we need to fix this.This is a long title that is going to distort the screen really bad and hence we need to fix this.This is a long title that is going to distort the screen really bad and hence we need to fix this.This is a long title that is going to distort the screen really bad and hence we need to fix this.",
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

export default MessagesScreen;
