import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import { colors } from "../config/Common-Resources.props";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    icon: "floor-lamp",
    backgroundColor: colors.FURNITURE,
    value: 1,
  },
  { label: "Cars", icon: "car", backgroundColor: colors.CARS, value: 2 },
  {
    label: "Cameras",
    icon: "camera",
    backgroundColor: colors.CAMERAS,
    value: 3,
  },
  { label: "Games", icon: "cards", backgroundColor: colors.GAMES, value: 4 },
  {
    label: "Clothing",
    icon: "shoe-heel",
    backgroundColor: colors.CLOTHING,
    value: 5,
  },
  {
    label: "Sports",
    icon: "basketball",
    backgroundColor: colors.SPORTS,
    value: 6,
  },
  {
    label: "Movie & Music",
    icon: "headphones",
    backgroundColor: colors.MOVIESMUSIC,
    value: 7,
  },
  {
    label: "Books",
    icon: "book",
    backgroundColor: colors.GOLD,
    value: 8,
  },
  {
    label: "More",
    icon: "apps",
    backgroundColor: colors.MEDIUM,
    value: 9,
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder={"Title"} />
        <AppFormField
          keyboardType={"numeric"}
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
