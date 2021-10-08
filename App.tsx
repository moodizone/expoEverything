import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { ThemeProvider as MyThemeProvider } from "./src/Theme/ThemeProvider";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>{"Hello world"}</Text>
        <Text>{"Hello world"}</Text>
        <Text>{"Hello world"}</Text>
        <Text>{"Hello world"}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
