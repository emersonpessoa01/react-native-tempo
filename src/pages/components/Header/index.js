import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import  {LinearGradient} from "expo-linear-gradient"


export default function Header() {
  return (
    <LinearGradient style={styles.header}
    colors={["#1ef6ff", "#97c1ff"]}
    >
      <Text style={styles.data}> data</Text>
      <Text style={styles.city}> Belém</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    
  }
})
