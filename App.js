import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  
  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  function configureNewGameHandler() {
    setGuessRounds(0);
    setUserNumber(null);

  };

  const gameOverHandler = numbOfRounds => {
    setGuessRounds(numbOfRounds)
  } 

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber}
      onGameOver={gameOverHandler}/>
  } else if (guessRounds < 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber}
      onReset={configureNewGameHandler}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number"/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {

  }
});
