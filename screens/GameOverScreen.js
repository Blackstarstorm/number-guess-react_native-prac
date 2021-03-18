import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game's Over!</TitleText>
      <View style={styles.imageContainer}>
      <Image
          // source={require("../assets/success.png")}
          source={{uri: "https://image.freepik.com/free-vector/man-stood-mountain-landscape-sunset_1048-8443.jpg"}}
        style={styles.image}
        resizeMode="cover" />
        </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="One More Time" onPress={props.onReset}/>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%",
  }
})

export default GameOverScreen;