import { Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
import Button from "./app/components/Button";
import ImageInput from "./app/components/ImageInput/ImageInput";
/**
 *
 * * Flexbox horizontal axis is called "Primary Axis"
 * * Flexbox vertical axis is called "Cross Axis"
 */

export default function App() {
  const [imageUri, setImageUri] = useState<string | null>();

  const requestPermission = async () => {
    //NOTE Another way of getting permissions using "expo-permissions" library
    //NOTE If we pass multiple permissions and if at least one of them is false then "granted" will be false
    //Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.CAMERA);

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permissions to access the library");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log("Result is ", result);

      if (!result.cancelled) {
        console.log("Setting Image URI");
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri: string) => setImageUri(uri)}
      />
    </Screen>
  );
}
