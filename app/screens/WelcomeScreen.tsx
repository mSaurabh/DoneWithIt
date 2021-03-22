import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import { colors } from "../config/Common-Resources.props";

function WelcomeScreen(props: any) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={"Login"}
          color={colors.PRIMARY}
          onPress={() => {
            console.log("Login Button Tapped");
          }}
        />
        <AppButton
          title={"Register"}
          color={colors.SECONDARY}
          onPress={() => {
            console.log("Register Button Tapped");
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    alignContent: "center",
    padding: 20,
    margin: 10,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
});
export default WelcomeScreen;
