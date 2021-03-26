import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <LinearGradient style={styles.header} colors={["#1ef6ff", "#97c1ff"]}>
      <Text style={styles.date}>25/03/2021</Text>
      <Text style={styles.city}> Belém</Text>
      <Ionicons name="cloud" color="#fff" size={150} />
      <Text style={styles.temp}>23º</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  date: {
    color: "#fff",
    fontSize: 17,
    
  },
  city: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    
  },
  temp:{
    color: "#fff",
    fontSize: 80, 
    fontWeight: "bold",

  }
});
