import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game's Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
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
})

export default GameOverScreen;