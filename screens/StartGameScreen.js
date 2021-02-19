import React, { useState }from "react";
import { Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("")

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  function resetInputHandler() { 
    setEnteredValue("");
    setConfirmed(false);
  };

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Sorry no good!", "Only numbers 1-99 are accepted.", [{text: "Okay", style: "destructive", onPress: resetInputHandler}])
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber();
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number</Text>
        <NumberContainer>
          {selectedNumber}
        </NumberContainer>
        <Button title="START GAME"/>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
  }}>
    <View style={styles.screen}>
      <Text style={styles.header}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number!</Text>
        <Input
          styles={style.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxlength={2}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary} />
            </View>
            
          <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
            </View>
        </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;