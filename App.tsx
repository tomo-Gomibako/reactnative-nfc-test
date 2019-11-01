import React from "react"
// import { StyleSheet, Text, View } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import Top from "./src/pages/Top"

const MainNavigation = createStackNavigator(
  {
    Top: { screen: Top }
  },
  { initialRouteName: "Top" }
)

const AppContainer = createAppContainer(MainNavigation)

export default function App() {
  return (
    <AppContainer />
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })
