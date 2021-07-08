import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!!</Text>
      <Button onPress={() => navigation.navigate('Component')} title="Go to Components Demo" />
      <Button onPress={() => navigation.navigate('List')} title="Go to List Demo" />
      <Button onPress={() => navigation.navigate('Image')} title="Go to Images Demo" />
      <Button onPress={() => navigation.navigate('Counter')} title="Go to Counter Demo" />
      <Button onPress={() => navigation.navigate('Color')} title="Go to Color Demo" />
      <Button onPress={() => navigation.navigate('Square')} title="Go to Squre Demo" />
      {/* <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    padding: 30
  },
  touchable: {
    fontSize: 45,
    padding: 50
  }
});

export default HomeScreen;
