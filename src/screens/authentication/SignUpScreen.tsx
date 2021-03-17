import React, {FC} from "react";
import {Button, Text, View} from "react-native";

const SignUpScreen: FC<any> = ({navigation}: any) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button title={"back"} onPress={() => navigation.navigate('SignInScreen')}/>
    </View>
  )
}

export default SignUpScreen;
