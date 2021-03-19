import React, {FC} from "react";
import {Text} from 'react-native';
import Container from "../../components/Container";
import {Box} from "../../components/Theme";
import {Google} from "../../components/SocialLogin";
import {SocialLogin} from '../../components/SocialLogin'

const SignUpScreen: FC<any> = ({navigation}: any) => {
  return (
    <Container footer={<SocialLogin />}>
    </Container>
  )
}

export default SignUpScreen;
