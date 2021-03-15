import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Menu from "../../pages/components/Menu"
import Header from "../../pages/components/Header"

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#e8f0ff",
    paddingTop:"5%",

  }

})
