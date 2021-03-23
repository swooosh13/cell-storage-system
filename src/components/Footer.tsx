import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {SocialLogin} from "./SocialLogin";
import {Box, Text} from "./Theme";
import {BorderlessButton} from "react-native-gesture-handler";

interface IFooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer: FC<IFooterProps> = ({onPress, title, action}) => {
  return (
    <>
      <SocialLogin/>
      <Box alignItems={"center"} marginTop={"m"}>
        <BorderlessButton {...{onPress}}>
          <Text variant={"button"} color={"white"}>
            <Text>{`${title} `}</Text>
            <Text color={"primary"}>{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>)
}

export default Footer;
