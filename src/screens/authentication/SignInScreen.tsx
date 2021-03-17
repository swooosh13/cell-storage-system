import React, {FC} from "react";
import {Button, Text, View} from "react-native";


const SignInScreen: FC<any> = ({navigation}: any) => {
  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button title={"back"} onPress={() => navigation.navigate('OnboardingScreen')}/>
    </View>
  )
}

export default SignInScreen;
