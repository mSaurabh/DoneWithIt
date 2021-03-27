import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import AppButton from "./app/components/AppButton";
import { Card } from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { C_Picker, C_Switch, C_TextInput, C_View } from "./concepts/C_Styling";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Icon from "./app/components/AppIcon/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import AppPicker from "./app/components/AppPicker/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
/**
 *
 * * Flexbox horizontal axis is called "Primary Axis"
 * * Flexbox vertical axis is called "Cross Axis"
 */

export default function App() {
  //return <ViewImageScreen />;
  //return <ViewImageScreen />;
  //return <MyAccountScreen />;
  //return <ListingsScreen />;
  //return <AppTextInput icon="email" placeholder="Username" />;
  //return <C_Switch />;
  //return <LoginScreen />;
  return <ListingEditScreen />;
  //return <C_Picker />;
  //return <MessagesScreen />;
}
