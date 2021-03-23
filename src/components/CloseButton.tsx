import React from "react";
import {Box, Text} from "./Theme";
import {Feather as Icon} from '@expo/vector-icons'
import {RectButton} from "react-native-gesture-handler";

interface ICloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({onPress}: ICloseButtonProps) => {
  return (
    <RectButton {...{onPress}}>
      <Box style={{height: SIZE, width: SIZE, borderRadius: SIZE / 2}}
           backgroundColor={"white"}
           alignItems={"center"}
           justifyContent={"center"}>
        <Text color={"secondary"} textAlign={"center"}>
          <Icon name={"x"} size={25}/>
        </Text>
      </Box>
    </RectButton>
  )
}

export default CloseButton;
