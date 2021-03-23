import React, {useRef} from "react";
import {Navigation, StackNavigatorProps} from "../../components/Navigation";

import {useFormik} from 'formik';
import * as Yup from 'yup';


import Container from '../../components/Container';

import Button from "../../components/Button";
import {Box, Text} from "../../components/Theme";

import {TextInput} from "../../components/TextInput";

import Footer from "../../components/Footer";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords do not match")
    .required("required"),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),

});

const SignUpScreen = ({navigation}: StackNavigatorProps<Navigation, "SignUpScreen">) => {

  const footer = (
    <Footer title={"If you don`t have a account"}
            action={"Sign Up"}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}/>
  )

  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {email: "", password: '', passwordConfirmation: "", remember: true},
    validationSchema: SignUpSchema,
    onSubmit: (values) => console.log(values)
  });

  return (
    <Container {...{footer}} >
      <Box padding={"l"} marginBottom={"l"}>
        <Text variant={"title1"}
              textAlign={"center"}
              marginBottom={"m"}>
          Sign Up
        </Text>
        <Text variant={"body"}
              textAlign={"center"}
              marginBottom={"l"}>
          Create an account now
        </Text>


        <Box>
          <Box marginBottom={"m"}>
            <TextInput icon={"mail"}
                       placeholder={"enter your email adress"}
                       onChangeText={handleChange("email")}
                       onBlur={handleBlur("email")}
                       error={errors.email}
                       touched={touched.email}
                       autoCapitalize={"none"}
                       autoCompleteType={"email"}
                       returnKeyType={"next"}
                       returnKeyLabel={"next"}
                       // @ts-ignore
                       onSubmitEditing={() => password.current?.focus()}/>
          </Box>

          <Box marginBottom={"m"}>

            <TextInput icon={"lock"}
                       ref={password}
                       onChangeText={handleChange("password")}
                       onBlur={handleBlur("password")}
                       placeholder={"Enter your password"}
                       error={errors.password}
                       touched={touched.password}
                       autoCompleteType={"password"}
                       secureTextEntry
                       returnKeyType={"next"}
                       returnKeyLabel={"next"}
                       // @ts-ignore
                       onSubmitEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>


          <TextInput icon={"lock"}
                     ref={passwordConfirmation}
                     onChangeText={handleChange("passwordConfirmation")}
                     onBlur={handleBlur("passwordConfirmation")}
                     placeholder={"Confirm your password"}
                     error={errors.passwordConfirmation}
                     touched={touched.passwordConfirmation}
                     secureTextEntry
                     autoCompleteType={"password"}
                     returnKeyType={"go"}
                     returnKeyLabel={"go"}
                     onSubmitEditing={() => handleSubmit()}
          />

          <Box alignItems={"center"} marginTop={"xl"}>
            <Button variant={"primary"}
                    onPress={handleSubmit}
                    label={"Log into your account"}
            />

          </Box>
        </Box>
      </Box>

    </Container>
  )
}

export default SignUpScreen;
