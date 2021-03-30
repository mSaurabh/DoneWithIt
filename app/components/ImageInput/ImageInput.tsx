import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/Common-Resources.props";

function ImageInput({
  imageUri,
  onChangeImage,
}: {
  imageUri: string | null;
  onChangeImage: any;
}) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    //NOTE Another way of getting permissions using "expo-permissions" library
    //NOTE If we pass multiple permissions and if at least one of them is false then "granted" will be false
    //Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.CAMERA);

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permissions to access the library");
    }
  };
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log("Result is ", result);

      if (!result.cancelled) {
        console.log("Setting Image URI");
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.MEDIUM}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.LIGHT,
    borderRadius: 15,
    justifyContent: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
