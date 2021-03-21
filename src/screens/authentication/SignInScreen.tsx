import React, {FC} from "react";
import {Navigation, StackNavigatorProps} from "../../components/Navigation";

import {Formik} from 'formik';
import * as Yup from 'yup';


import Container from '../../components/Container';
import {SocialLogin} from "../../components/SocialLogin";
import Button from "../../components/Button";
import {Box, Text} from "../../components/Theme";

import {TextInput} from "../../components/TextInput";
import {Checkbox} from "../../components/CheckBox";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),

});


interface ISignInProps {
  navigation: StackNavigatorProps<Navigation, "SignInScreen">;
}

const SignInScreen: FC<ISignInProps> = ({navigation}) => {

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

        <Formik
          initialValues={{email: '', password: '', remember: false}}
          validationSchema={SignInSchema}
          onSubmit={values => console.log(values)}>
          {
            ({
               handleChange,
               handleBlur,
               handleSubmit,
               values,
               errors,
               touched,
              setFieldValue
             }) => (
              <Box>
                <Box marginBottom={"m"}>
                  <TextInput icon={"mail"}
                             placeholder={"enter your email adress"}
                             onChangeText={handleChange("email")}
                             onBlur={handleBlur("email")}
                             error={errors.email}
                             touched={touched.email}/>
                </Box>

                <TextInput icon={"lock"}
                           onChangeText={handleChange("password")}
                           onBlur={handleBlur("password")}
                           placeholder={"Enter your password"}
                           error={errors.password}
                           touched={touched.password}
                />

                <Box flexDirection={"row"} justifyContent={"space-between"}>
                  <Checkbox label={"remember me"}
                            checked={values.remember}
                            onChange={() => setFieldValue("remember", !values.remember)}/>
                  <Button variant={"transparent"}>
                    <Text variant={"button"} color={"primary"}> Forgot password?</Text>
                  </Button>
                </Box>

                <Box alignItems={"center"} marginTop={"xl"}>
                  <Button variant={"primary"}
                          onPress={handleSubmit}
                          label={"Log into your account"}
                  />

                </Box>
              </Box>
            )}
        </Formik>
      </Box>

    </Container>
  )
}

export default SignInScreen;
