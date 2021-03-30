import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../Text";
import { colors } from "../../config/Common-Resources.props";

interface dCard {
  title: string;
  subTitle: string;
  image: any;
}

/**
 * ### Card component to display Items on Sale
 *  - A custom Function component to display items to be DONE WITH
 *  ----
 *  @example
 *  <Card title={"some title"}
 *        subTitle={"some content"}
 *        image={require("image path")} />
 *  ----
 *  @version 21.03.19
 *  -  *Creating Card component*
 *  @author  s_Mankar
 *
 **/
export function Card({ title, subTitle, image }: dCard) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.SECONDARY,
  },
  title: {
    marginBottom: 7,
  },
});
