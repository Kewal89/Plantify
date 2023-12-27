import React from "react"
import * as Font from "expo-font"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import { useEffect } from "react" // @ts-ignore
import HeaderIcon from "../assets/header.png" // @ts-ignore
import NotiIcon from "../assets/noti.png" // @ts-ignore
import HamIcon from "../assets/ham.png"
import { Image, View } from "react-native"

const Layout = () => {
  const [fontsLoaded] = useFonts({
    PhilosopherRegular: require("../assets/fonts/Philosopher-Regular.ttf"),
  })

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          PhilosopherRegular: require("../assets/fonts/Philosopher-Regular.ttf"),
        })
      } catch (e) {
        console.warn(e)
      }
    }
  }, [])

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Plantify",
          headerLeft: () => <Image source={HeaderIcon} style={{ marginRight: 14 }} />,
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={NotiIcon} style={{ marginRight: 14 }} />
              <Image source={HamIcon} style={{ marginRight: 14 }} />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="metadata/[id]"
        options={{
          headerStyle: { backgroundColor: "#9CE5CB" },
          headerShadowVisible: false,
          headerTitle: "Plantify",
          headerLeft: () => <Image source={HeaderIcon} style={{ marginRight: 14 }} />,
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={NotiIcon} style={{ marginRight: 14 }} />
              <Image source={HamIcon} style={{ marginRight: 14 }} />
            </View>
          ),
        }}
      />
    </Stack>
  )
}

export default Layout
