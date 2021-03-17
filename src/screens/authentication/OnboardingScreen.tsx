import {Button, Text, View} from "react-native";
import React from "react";

const OnboardingScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'cyan'}}>
      <Button title={"let`s get started"} onPress={() => navigation.navigate('SignInScreen')}/>
    </View>
  )
}

export default OnboardingScreen;
