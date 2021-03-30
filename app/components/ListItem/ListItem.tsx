import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../Text";
import { colors } from "../../config/Common-Resources.props";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons = true,
}: {
  title: string;
  subTitle?: string;
  image?: any;
  IconComponent?: any;
  onPress?: any;
  renderRightActions?: any;
  showChevrons?: boolean;
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.LIGHT} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name={"chevron-right"}
              size={25}
              color={colors.MEDIUM}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    //NOTE: by default flexDirection is column, here we want to layout items horizontally
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.WHITE,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  title: { fontWeight: "500" },
  subTitle: {
    color: colors.MEDIUM,
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
export default ListItem;
