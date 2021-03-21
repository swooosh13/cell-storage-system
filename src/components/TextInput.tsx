import React, {FC} from 'react';
import {StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {Box, useTheme} from "./Theme";

interface ITextInput extends RNTextInputProps {
  icon?: any | string;
  touched?: boolean;
  error?: string;
}


export const TextInput: FC<ITextInput> = ({icon, touched, error,...props}) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2;

  const reColor = !touched ? "text" : (error ? "danger" : "success");
  const color = theme.colors[reColor];

  return (
    <Box flexDirection={"row"}
         alignItems={"center"}
         height={48}
         borderRadius={"m"}
         borderWidth={StyleSheet.hairlineWidth * 3}
         borderColor={reColor}>
      <Box padding={"s"}>
        <Icon name={icon} {...{color}} size={16}/>
      </Box>

      <Box flex={1}>
        <RNTextInput
          {...props}
          placeholderTextColor={color}
        />
      </Box>
      {
        touched && (
          <Box borderRadius={"xl"}
               height={SIZE}
               width={SIZE}
               marginRight={"s"}
               alignItems={"center"}
               justifyContent={"center"}
               backgroundColor={!error ? "success" : "danger"}
          >
            <Icon name={!error ? "check" : "x"} color={"white"} size={12}/>
          </Box>
        )
      }
    </Box>
  )
}
