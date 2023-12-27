import React, { useState, useEffect } from "react"
import { Image, ImageBackground, View, Text, StyleSheet, Animated, Easing } from "react-native" // @ts-ignore
import BgMask from "../../assets/bg_mask.png" // @ts-ignore
import BgRect from "../../assets/bg_react.png" // @ts-ignore
import PawIcon from "../../assets/paw.png" // @ts-ignore
import SelectHeart from "../../assets/select.png" // @ts-ignore
import UnSelectHeart from "../../assets/unselect.svg" // @ts-ignore
import { useLocalSearchParams } from "expo-router"
import { observer } from "mobx-react"
import AppStore from "../../Store/AppStore"

type MetaType = {
  id: String
}

const FileB = observer(() => {
  const data: any = useLocalSearchParams()
  console.info("File :", AppStore.data)

  const { name, category, price, image, size } = AppStore.data

  const [animatedValue] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }, [])

  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 250],
  })

  return (
    <View style={style.container}>
      <ImageBackground source={BgRect} style={{ width: "100%", height: 416 }} imageStyle={{ position: "absolute", top: -100 }}>
        <ImageBackground source={BgMask} style={style.ImgBg}>
          <View style={style.HeadContainer}>
            <Text style={style.Name}>{category}</Text>
            {/* @ts-ignore */}
            <Image style={style.Paw} source={PawIcon} />
            {/* @ts-ignore */}
          </View>
          <Text style={style.Category}>{name}</Text>
          <View style={style.MetaData}>
            <Text style={style.PriceA}>{`Price`}</Text>
            <Text style={style.Price}>{`$${price}`}</Text>
          </View>
          <View style={style.MetaData}>
            <Text style={style.PriceA}>{`Size`}</Text>
            <Text style={style.Price}>{size}</Text>
          </View>
        </ImageBackground>

        <Animated.View
          style={{
            position: "absolute",
            top: 50,
            right: 0, //
            overflow: "hidden",
            width: interpolatedValue,
            height: interpolatedValue,
          }}
        >
          <Image
            source={{
              uri: image,
            }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </Animated.View>
        {/* <Image
        style={style.ItemImg}
        source={{
          uri: image,
        }}
      /> */}
      </ImageBackground>
    </View>
  )
})

const style = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
  },
  ImgBg: {
    width: "100%",
    height: 177,
    // backgroundColor: "#9CE5CB",
    borderRadius: 10,
    paddingLeft: 36,
    paddingTop: 32,
    position: "relative",
  },
  HeadContainer: {
    flexDirection: "row",
    alignContent: "center",
    // padding: 24,
    columnGap: 8,
    marginBottom: 11,
  },
  Name: {
    color: "#002140",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
  },
  PawIcon: {
    width: 17,
    height: 17,
  },
  Category: {
    color: "#002140",
    fontSize: 32,
    fontFamily: "PhilosopherRegular",
    fontStyle: "normal",
    fontWeight: "700",
    marginBottom: 24,
  },
  MetaData: {
    flexDirection: "column",
    columnGap: 14,
    marginBottom: 24,
  },
  PriceA: {
    fontSize: 12,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 12,
    color: "#002140",
    textTransform: "uppercase",
  },
  Price: {
    color: "#002140",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  isSelected: {},
  ItemImg: {
    position: "absolute",
    top: 50,
    right: 0,
    width: 227,
    height: 250,
  },
})

export default FileB
