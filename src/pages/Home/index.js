import React, { useState, useEffect } from "react";
import { Text,SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import Menu from "../../pages/components/Menu";
import Header from "../../pages/components/Header";
import Conditions from "../../pages/components/Conditions";
import Forecast from "../../pages/components/Forecast";
import * as Location from "expo-location";
import api, { key } from "../../services/api";

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
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackground] = useState(["#1ef6ff", "#97c1ff"]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      // console.log(status);
      if (status !== "granted") {
        setErrorMsg("Permissão negada para localização");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      // console.log(location.coords.latitude);
      //weather?key=6ef45251&lat=-1.36259&lon=-48.4063325
      const response = await api.get(
        `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );

      // console.log(response.data);
      setWeather(response.data);

      if (response.data.results.currently === "noite") {
        setBackground(["#0c3741", "#0f2f61"]);
      }

      switch (response.data.results.condition_slug) {
        case "clear_day":
          setIcon({ name: "partly-sunny", color: "#ffb300" });
          break;
        case "rain":
          setIcon({ name: "rainy", color: "#fff" });
          break;
        case "storm":
          setIcon({ name: "rainy", color: "#fff" });
          break;
      }

      setLoading(false);
    })();
  }, []);

  if (loading){
    return (
      <View style={styles.container}>
        <Text>
          Carregando dados...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={background} weather={weather} icon={icon} />
      <Conditions weather={weather} />
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
