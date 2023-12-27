import { Stack, router } from "expo-router"
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FileA from "../components/FileA/FileA"

const Home = () => {
  const onPressMeta = () => {
    router.push({
      pathname: "/metadata/[id]",
      params: { id: "2" },
    })
  }

  return (
    <SafeAreaView>
      <FileA />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Home
