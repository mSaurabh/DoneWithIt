/**
 * @description This file demonstrates all the components of "Styling"
 * lecture on www.codewithmosh.com
 * @author s_Mankar
 * @version 21.3.18
 */
import React, { useState } from "react";
import { Switch, TextInput, View } from "react-native";
import AppText from "../app/components/Text";
import Screen from "../app/components/Screen";
import { Platform, Text } from "react-native";
import { IOSFONT, ANDROIDFONT } from "./font.family.enum";
import { colors } from "../app/config/Common-Resources.props";
import { Picker } from "@react-native-picker/picker";

/**
 * ### Picker component for iOS
 *  - A basic picker for iOS (like a dropdown)
 *  ----
 *  @example
 *  <C_Picker />
 *  ----
 *  @version 21.03.21
 *  -  *Creating Picker component*
 *  @author  S_Mankar
 *
 **/
export function C_Picker(props: any) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  return (
    <Screen>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue.toString())
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </Screen>
  );
}

/**
 * ### Demonstrating a Switch in RN
 *  - Basic switch concept and how to create one
 *  ----
 *  @example
 *  <C_Switch />
 *  ----
 *  @version 21.03.21
 *  -  *Creating a switch functional component*
 *  @author  S_Mankar
 *
 **/
export function C_Switch(props: any) {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

/**
 * ### Demonstrating TextInput concept
 *  - A basic text input box
 *  ----
 *  @example
 *  <C_TextInput />
 *  ----
 *  @version 21.03.21
 *  -  *Concept for Text Input basics*
 *  @author  s_Mankar
 *
 **/
export function C_TextInput(props: any) {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        //NOTE for boolean options just specifying the name is = secureTextEntry = {true}
        secureTextEntry
        //NOTE Only works with iOS
        clearButtonMode="always"
        //NOTE Only numbers can be inputted
        keyboardType="numeric"
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}

/**
 * ### Function Component for a view
 *  - Just for Demo purpose use this
 *  ----
 *  @example
 *  <C_View bgColor = {"purple"}>
 *    {Children Components}
 *  </C_View>
 *  ----
 *  @version 21.03.18
 *  -  *Creating C_View*
 *  @author  s_Mankar
 *
 **/
export function C_View(props: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.bgColor,
      }}
    >
      {props.children}
    </View>
  );
}

/**
 * ### Functional Component for Styling Text
 *  - Example to explain the concept from www.codewithmosh.com
 *  ----
 *  @example
 *  You may skip this for now...
 *  ----
 *  @version 21.03.18
 *  -  Creating functional component for styling text
 *  @author  s_Mankar
 *
 **/
export function C_StylingText(props: any) {
  return (
    <Text
      style={{
        fontFamily: Platform.OS === "ios" ? IOSFONT.COUIR : ANDROIDFONT.NORMAL,
        fontSize: 30,
        fontWeight: "600",
        color: "gold",
        textTransform: "capitalize",
        textAlign: "center",
      }}
    >
      I love React Native! This is my first app and this is so cool
    </Text>
  );
}

/**
 * ### Demonstrating how custom component called <Apptext> works
 *  ----
 *  @example
 *  <C_Apptext />
 *  ----
 *  @version 21.03.18
 *  -  *Creating Demo Component*
 *  @author  s_Mankar
 *
 **/
export function C_Apptext(props: any) {
  return <AppText>I Love React Native!</AppText>;
}

/** 
@author s_Mankar 
@version 21.3.18
@example NOTE: 
         1. Padding is space inside the component and 
         2. Margin is space outside the component
    ____________________________
    |COMPONENT                 |
    |                          |
    |                          |
    |                      |-p-|-m-|
    |                          |
    |__________________________|
*/
export function C_PaddingMargin(props: any) {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.WHITE,
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <Text
          style={{
            alignItems: "baseline",
            textAlignVertical: "top",
            fontSize: 11,
          }}
        >
          Padding In
        </Text>
        <View
          style={{
            backgroundColor: colors.BLACK,
            width: 50,
            height: 50,
          }}
        ></View>
      </View>
      <Text> {"Margin Out"} </Text>
      <View
        style={{
          backgroundColor: colors.SECONDARY,
          width: 100,
          height: 100,
          margin: 20,
        }}
      ></View>
    </View>
  );
}

export function C_Shadows(props: any) {
  return (
    <View
      style={{
        backgroundColor: colors.BLUE,
        width: 100,
        height: 100,
        //NOTE: These 3 props are required to generate a shadow for ios
        shadowColor: colors.MEDIUM,
        shadowOffset: { height: 10, width: 10 },
        shadowOpacity: 1,
        shadowRadius: 9,
        //NOTE: For Android doesn't give much control over shadows
      }}
    ></View>
  );
}

export function C_Borders(props: any) {
  return (
    <View
      style={{
        backgroundColor: colors.BLUE,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: colors.BLACK,
        // Applying borderRadius at least half of the size of our box >= 1/2 size of box
        borderRadius: 50,
      }}
    ></View>
  );
}
