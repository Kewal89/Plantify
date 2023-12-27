import { Fragment } from "react"
import { View, Text, StyleSheet } from "react-native"
import ListItem from "../ListItem/ListItem"
import { useLayoutEffect, useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { router } from "expo-router"
import AppStore from "../../Store/AppStore"

const FileA = () => {
  const [data, setData] = useState<any>([])

  useLayoutEffect(() => {
    const APICall = async () => {
      fetch("https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q")
        .then((res) => res.json())
        .then((result) => {
          setData(result)
        })
    }
    APICall()
  }, [])

  const onPressRedirect = (value: any) => {
    router.push({
      pathname: "/metadata/[id]",
      params: { id: value.id },
    })
    AppStore.setData(value)
  }

  return (
    <View style={style.main}>
      {data.length > 0 && (
        <>
          {console.info("Parent Data :", data)}
          {data.map((value: any, index: number) => (
            <TouchableOpacity key={`data_${index}`} onPress={() => onPressRedirect(value)}>
              <ListItem data={value} />
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  main: {},
})

export default FileA
