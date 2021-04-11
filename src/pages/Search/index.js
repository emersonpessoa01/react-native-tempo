import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api, { key } from "../../services/api";

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    //weather?key=6ef45251&lat=-1.36259&lon=-48.4063325;
    // const response = await api.get(`/weather?key=${key}&city_name=${input}`);
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);
    console.log(response.data);
    /*if (response.data.by === "default") {
      setError("Hum...Cidade não encontrada");
      setInput("");
      setCity(null);
      Keyboard.dismiss();
      return;
    }
    
    setCity(response.data);
    setInput("");
    Keyboard.dismiss();
*/
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="chevron-left" size={32} color="#000" />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChange={(valor) => setInput(valor)}
          placeholder="Ex:Belém, PA"
          style={styles.input}
        />

        <TouchableOpacity style={styles.icon} onPress={handleSearch}>
          <Feather name="search" color="#fff" size={22} />
        </TouchableOpacity>
      </View>


      {error && <Text style={{fontSize:18, marginTop: 25}}>{error}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
    backgroundColor: "#e8f0ff",
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  searchBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ddd",
    width: "90%",
    height: 50,
    borderRadius: 8,
  },
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 7,
  },
  icon: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#1de6ff",
  },
});
