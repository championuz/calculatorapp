import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';


const Display = ({ expression }) => {
    return (
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
    );
  };

  const Button = ({ onPress, label }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  
const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonPress = (value) => {
    // Implement the logic to update the expression based on button presses
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    // Implement the logic to evaluate the expression and show the result
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    // Implement the logic to clear the expression
    setExpression('');
  };

  return (
    <View style={styles.container}>
      <StatusBar
      barStyle={'dark-content'}/>
      <View>
        <Text style={styles.headerText}>Calculator</Text>
      </View>
      <Display expression={expression} />
      <View style={styles.buttonsContainer}>
        <Button onPress={handleClear} label="C" />
        <Button onPress={() => handleButtonPress('-')} label="-" />
        <Button onPress={() => handleButtonPress('+')} label="+" />
        <Button onPress={() => handleButtonPress('.')} label="." />
        <Button onPress={() => handleButtonPress('1')} label="1" />
        <Button onPress={() => handleButtonPress('2')} label="2" />
        <Button onPress={() => handleButtonPress('3')} label="3" />
         <Button onPress={() => handleButtonPress('4')} label="4" />
        <Button onPress={() => handleButtonPress('5')} label="5" />
        <Button onPress={() => handleButtonPress('6')} label="6" />
        {/* Row 4 */}
        <Button onPress={() => handleButtonPress('7')} label="7" />
        <Button onPress={() => handleButtonPress('8')} label="8" />
        <Button onPress={() => handleButtonPress('9')} label="9" />
        {/* Row 5 */}
        <Button onPress={() => handleButtonPress('0')} label="0" />
        <Button onPress={handleCalculate} label="=" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  headerText: {
  marginBottom: 10,
  fontSize: 24,
  fontWeight: 'bold',
  // fontDecoration: 'underline',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  displayContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    width: '80%',
    borderRadius: 8,
    marginBottom: 10,
  },
  expressionText: {
    fontSize: 28,
    textAlign: 'right',
    color: '#333333',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '20%',
    aspectRatio: 1,
    margin: '1%',
  },
  buttonText: {
    fontSize: 24,
    color: '#333333',
  },
});

export default Calculator;
