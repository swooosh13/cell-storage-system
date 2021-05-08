import React, {FC} from 'react';
import {StackNavigationProp} from "@react-navigation/stack";
import {Linking} from "react-native";

import * as Yup from "yup";
import {useFormik} from "formik";

import {AuthenticationRoutes} from "../../components/Navigation";
import {Box, Text} from "../../components/Theme";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import {TextInput} from "../../components/TextInput";
import Button from "../../components/Button";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

interface ForgotPasswordScreen {
  navigation: StackNavigationProp<AuthenticationRoutes, "ForgotPasswordScreen">
}

const ForgotPasswordScreen: FC<ForgotPasswordScreen> = ({navigation}) => {

  const footer = (<Footer title={"Не работает ? "}
                          action={"Попробовать что-то еще"}
                          onPress={() => Linking.openURL("https://support.google.com/")}/>);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {email: ""},
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => navigation.navigate("ChangedPasswordScreen")
  });

  return (
    <Container {...{footer}}>
      <Box padding={"xl"} marginBottom={"l"} flex={1} justifyContent={"center"}>
        <Box marginTop={"xl"}>
          <Text variant={"title1"}
                textAlign={"center"}
                marginBottom={"m"}>
            Забыл пароль?
          </Text>
          <Text variant={"body"}
                textAlign={"center"}>
            введите email связанный с вашей учетной записью
          </Text>
        </Box>

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
                       returnKeyType={"go"}
                       returnKeyLabel={"go"}
                       onSubmitEditing={() => handleSubmit()}/>
          </Box>

          <Box alignItems={"center"} marginTop={"s"}>
            <Button variant={"primary"}
                    onPress={handleSubmit}
                    label={"сбросить пароль"}
            />

          </Box>
        </Box>
      </Box>

    </Container>
  )
}

export default ForgotPasswordScreen;
