import { Image, ImageBackground, View, Text, StyleSheet } from "react-native" // @ts-ignore
import BgMask from "../../assets/bg_mask.png" // @ts-ignore
import PawIcon from "../../assets/paw.png" // @ts-ignore
import SelectHeart from "../../assets/select.png" // @ts-ignore
import UnSelectHeart from "../../assets/unselect.svg" // @ts-ignore
import React from "react"


const ListItem = ({ data }: any) => {
  const {
    id,
    name = "Air Purifier",
    category = "Peperomia", //
    price = 400,
    image = "https://i.postimg.cc/L6vmPsTC/Peperomia-Obtusfolia.png",
  } = data

  return (
    <View style={style.container}>
      <ImageBackground source={BgMask} style={style.ImgBg}>
        <View style={style.HeadContainer}>
          <Text style={style.Name}>{category}</Text>
          {/* @ts-ignore */}
          <Image style={style.Paw} source={PawIcon} />
          {/* @ts-ignore */}
        </View>
        <Text style={style.Category}>{name}</Text>
        <View style={style.MetaData}>
          <Text style={style.Price}>{`$${price}`}</Text>
          {/* @ts-ignore */}
          <Image style={style.isSelected} source={SelectHeart} />
        </View>
      </ImageBackground>
      <Image
        style={style.ItemImg}
        source={{
          uri: image,
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 40,
  },
  ImgBg: {
    width: "100%",
    height: 177,
    backgroundColor: "#9CE5CB",
    borderRadius: 10,
    paddingLeft: 24,
    paddingTop: 24,
    position: "relative",
  },
  HeadContainer: {
    flexDirection: "row",
    alignContent: "center",
    // padding: 24,
    columnGap: 21,
    marginBottom: 10,
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
    flexDirection: "row",
    columnGap: 14,
  },
  Price: {
    color: "#002140",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
  },
  isSelected: {},
  ItemImg: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 116,
    height: 150,
  },
})

export default ListItem
