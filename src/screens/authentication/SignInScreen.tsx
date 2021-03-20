import React, {FC} from "react";

import {Navigation, StackNavigatorProps} from "../../components/Navigation";
import Container from '../../components/Container';
import {SocialLogin} from "../../components/SocialLogin";
import Button from "../../components/Button";
import {Box, Text} from "../../components/Theme";

import {TextInput} from "../../components/TextInput";
import {Checkbox} from "../../components/CheckBox";


interface ISignInProps {
  navigation: StackNavigatorProps<Navigation, "SignInScreen">;
}

const SignInScreen: FC<ISignInProps> = ({navigation}) => {

  const emailValidator = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.toLowerCase().trim()));
  }

  const passwordValidator = (password: string) => true;

  const footer = (
    <>
      <SocialLogin/>
      <Box alignItems={"center"}>
        <Button variant={"transparent"} onPress={() => alert("SignUp!")}>
          <Box flexDirection={"row"} justifyContent={"center"}>
            <Text variant={"button"} color={"white"}>
              Don`t have a account ?
            </Text>
            <Text marginLeft={"s"} variant={"button"} color={"primary"}>
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  )

  return (
    <Container {...{footer}} >
      <Box padding={"l"} marginBottom={"l"}>
        <Text variant={"title1"}
              textAlign={"center"}
              marginBottom={"m"}>
          Welcome Back
        </Text>
        <Text variant={"body"}
              textAlign={"center"}
              marginBottom={"l"}>
          Use your credentials below and login to your account
        </Text>


        <Box marginBottom={"m"}>
          <TextInput icon={"mail"}
                     placeholder={"Enter your email"}
                     validator={emailValidator}/>


        </Box>

        <TextInput icon={"lock"}
                   placeholder={"Enter your password"}
                   validator={passwordValidator}/>
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Checkbox label={"remember me"}/>
          <Button variant={"transparent"}>
            <Text variant={"button"} color={"primary"}> Forgot password?</Text>
          </Button>
        </Box>

        <Box alignItems={"center"} marginTop={"xl"}>
          <Button variant={"primary"}
                  onPress={() => true}
                  label={"Log into your account"}
          />

        </Box>
      </Box>

    </Container>
  )
}

export default SignInScreen;
