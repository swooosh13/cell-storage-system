import React, {FC} from 'react';
import {StackNavigationProp} from "@react-navigation/stack";
import {Feather as Icon} from '@expo/vector-icons';

import {AuthenticationRoutes} from "../../components/Navigation";
import Container from "../../components/Container";
import {Box, Text} from "../../components/Theme";
import Button from "../../components/Button";
import CloseButton from "../../components/CloseButton";

interface IChangedPasswordScreen {
  navigation: StackNavigationProp<AuthenticationRoutes, "ChangedPasswordScreen">
}

const SIZE = 80;

const ChangedPasswordScreen: FC<IChangedPasswordScreen> = ({navigation}) => {

  const footer = (<Box flexDirection={"row"} justifyContent={"center"} paddingBottom={"s"}>
      <CloseButton onPress={() => navigation.pop()}/>
    </Box>
  )

  return (
    <Container {...{footer}}>

      <Box flex={1} style={{marginTop: 100}} justifyContent={"center"} alignItems={"center"}>
        <Box style={{height: SIZE, width: SIZE, borderRadius: SIZE / 2}}
             backgroundColor={"primaryLight"}
             justifyContent={"center"}
             alignItems={"center"}
        marginBottom={"l"}>

          <Text>
            <Icon name="check" size={52} color={"#2956af"}/>
          </Text>

        </Box>
          <Text variant={"title1"}
                textAlign={"center"}
                marginBottom={"m"}>
            Check your email
          </Text>
          <Text variant={"body"}
                textAlign={"center"}>
            We have sent a password recover{"\n"}instructions to your email
          </Text>

        <Button variant={"primary"} onPress={() => navigation.navigate('SplashScreen')}/>
      </Box>
    </Container>
  )
}

export default ChangedPasswordScreen;
