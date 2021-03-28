import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Menu from "../../pages/components/Menu";
import Header from "../../pages/components/Header";
import Conditions from "../../pages/components/Conditions";
import Forecast from "../../pages/components/Forecast";

const mylist = [
  {
    date: "28/03",
    weekday: "Dom",
    max: 28,
    min: 23,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "29/03",
    weekday: "Seg",
    max: 28,
    min: 23,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "30/03",
    weekday: "Ter",
    max: 28,
    min: 23,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "31/03",
    weekday: "Qua",
    max: 28,
    min: 23,
    description: "Tempestades isoladas",
    condition: "storm",
  },
  {
    date: "01/04",
    weekday: "Qui",
    max: 27,
    min: 23,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "02/04",
    weekday: "Sex",
    max: 28,
    min: 23,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "03/04",
    weekday: "Sáb",
    max: 28,
    min: 24,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "04/04",
    weekday: "Dom",
    max: 28,
    min: 24,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "05/04",
    weekday: "Seg",
    max: 26,
    min: 24,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "06/04",
    weekday: "Ter",
    max: 26,
    min: 24,
    description: "Tempestades isoladas",
    condition: "storm",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        contentContainerStyle={{ paddingBottom: "5%" }}
        horizontal={true}
        style={styles.list}
        data={mylist}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%",
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
