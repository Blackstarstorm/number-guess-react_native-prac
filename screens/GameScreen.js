import React, { useState, useRef, useEffect }from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "../constants/default-styles";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
    }
  };

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
};
const [rounds, setRounds] = useState(0);
const currrentLow = useRef(1);
const currrentHigh = useRef(100);

const { userChoice, onGameOver } = props;

useEffect(() => {
  if (currentGuess === props.userChoice) {
    props.onGameOver(rounds);
  }
}, [currentGuess, userChoice, onGameOver]);

const nextGuessHandler = direction => {
  if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "greater" && currentGuess > props.userChoice)) {
    Alert.alert("Play fair now!", "You know you're being dishonest... ", [{ text: "My Bad", style: "cancel" }]);
    return;
  } 
  if (direction === "lower") {
    currrentHigh.current = currentGuess;
  } else {
    currentLow.current = currentGuess
  }

  const nextNumber = generateRandomBetween(currrentLow.current, currrentHigh.current, setCurrentGuess(nextNumber));
  setRounds(curRounds => curRounds + 1);
};

return (
  <View styles={style.screen}>
    <Text style={DefaultStyles.title}>Oppenent's Guess:</Text>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card styles={style.buttonContainer}>
      <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")}/>
      <Button title="GREATER" onPress={nextGuessHandler.bind(this, "greater")}/>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
})

export default GameScreen;