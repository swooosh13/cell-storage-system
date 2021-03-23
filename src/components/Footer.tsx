import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {SocialLogin} from "./SocialLogin";
import {Box, Text} from "./Theme";

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
        <TouchableWithoutFeedback {...{onPress}}>
          <Text variant={"button"} color={"white"}>
            <Text>{`${title} `}</Text>
            <Text color={"primary"}>{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>)
}

export default Footer;
