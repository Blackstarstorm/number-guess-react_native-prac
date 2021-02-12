import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number!</Text>
        <Input styles={style.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxlength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" onPress={() => { }} color={Colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => { }} color={Colors.primary}/>
            </View>
        </View>
        </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: 100,

  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  }, 
  input: {
    width: 50,
    textAlign:"center",
  }
});

export default StartGameScreen;