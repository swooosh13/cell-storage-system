import React, { useRef, useState } from "react";
import { TextInput as RNTextInput, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthenticationRoutes, StackNavigatorProps } from "../../components/Navigation";
import Container from '../../components/Container';
import Button from "../../components/Button";
import { Box, Text } from "../../components/Theme";
import { TextInput } from "../../components/TextInput";
import { Checkbox } from "../../components/CheckBox";
import Footer from "../../components/Footer";

import { login } from "../../redux/reducers/auth-reducer/authActions";
import { usersAPI } from "../../redux/api/api";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const SignInScreen = ({ navigation }: StackNavigatorProps<AuthenticationRoutes, "SignInScreen">) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const footer = (
    <Footer title={"Если у вас нет аккаунта: "}
      action={"присоединиться"}
      onPress={() => navigation.navigate('SignUpScreen')} />
  )

  const onErrorLogin = (error: any) => {
    const handleMessage = (e: any) => {
      switch (e) {
        case 'user not found':
          return 'Пользователь с таким именем не найден'
        case 'invalid password':
          return "Неверный пароль"
      }
    }
    Alert.alert(
      `Ошибка`,
      `${handleMessage(error)}`,
      [
        {
          text: "Ok",
          style: "cancel"
        },
      ]
    );
  }

  const password = useRef<RNTextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: '', remember: true },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      usersAPI.login(values.email, values.password)
        .then((resp: any) => {
          dispatch(login({ email: values.email, userToken: resp.data.token }));
        })
        .catch((e: any) => {
          onErrorLogin(e.response.data.message);
        });
    }
  });

  return (
    <Container {...{ footer }} >
      <Box padding={"l"} marginBottom={"l"}
        marginTop={"xl"}
        alignItems={"stretch"} justifyContent={"center"}>

        <Text variant={"title1"}
          textAlign={"center"}
          marginBottom={"m"}>
          Добро пожаловать
        </Text>
        <Text variant={"body"}
          textAlign={"center"}
          marginBottom={"l"}>
          Используйте ваши учетные данные и авторизуйтесь
        </Text>


        <Box marginTop={"l"}>
          <Box marginBottom={"m"}>
            <TextInput icon={"mail"}
              placeholder={"введите адрес электронной почты"}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize={"none"}
              autoCompleteType={"email"}
              onSubmitEditing={() => password.current?.focus()} />
          </Box>

          <TextInput icon={"lock"}
            ref={password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            placeholder={"ввидите пароль"}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            returnKeyType={"go"}
            returnKeyLabel={"go"}
            onSubmitEditing={() => handleSubmit()}
          />

          <Box alignItems={"center"} marginTop={"xl"}>
            <Button variant={"primary"}
              onPress={handleSubmit}
              label={"Вход в аккаунт"}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default SignInScreen;
