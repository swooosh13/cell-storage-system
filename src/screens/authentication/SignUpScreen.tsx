import React, { useRef } from "react";
import { Linking, TextInput as RNTextInput, Alert } from "react-native";

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthenticationRoutes, StackNavigatorProps } from "../../components/Navigation";
import Container from '../../components/Container';
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Box, Text } from "../../components/Theme";
import { TextInput } from "../../components/TextInput";
import { usersAPI } from "../../redux/api/api";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords do not match")
    .required("Required"),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),

});

const SignUpScreen = ({ navigation }: StackNavigatorProps<AuthenticationRoutes, "SignUpScreen">) => {

  const footer = (<Footer title={"Don`t work ? "}
    action={"Try something else"}
    onPress={() => Linking.openURL("https://support.google.com/")} />);


  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const handleMessage = (m: any) => {

    if (m.includes("already exist")) {
      return "Пользователь с такой почтой уже существует";
    }
    if (m == 'ok') {
      return "Теперь можете авторизоваться";
    }

  }
  const onRegister = (message: any, success: boolean = false) => {
    Alert.alert(
      !success ? "Ошибка" : "Пользователь успешно создан",
      `${handleMessage(message)}`,
      [
        {
          text: "ok",
          style: "cancel"
        }
      ]
    );
  }
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: '', passwordConfirmation: "", remember: true },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      usersAPI.register(values.email, values.password)
        .then((resp: any) => onRegister(resp.data.message, true))
        .catch((e: any) => onRegister(e.response.data.message));
    }
  });

  return (
    <Container {...{ footer }} >
      <Box padding={"l"} marginTop={"xl"} marginBottom={"l"}>
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


        <Box marginTop={"l"}>
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
              onSubmitEditing={() => password.current?.focus()} />
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
              label={"Create an account"}
            />

          </Box>
        </Box>
      </Box>

    </Container>
  )
}

export default SignUpScreen;
