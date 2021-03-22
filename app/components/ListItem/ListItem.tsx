import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import { colors } from "../../config/Common-Resources.props";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}: {
  title: string;
  subTitle?: string;
  image?: any;
  IconComponent?: any;
  onPress?: any;
  renderRightActions?: any;
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.LIGHT} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
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
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
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
