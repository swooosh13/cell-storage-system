import React, {FC, ReactNode, useState} from 'react';
import {StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import theme, {Box} from "./Theme";

interface ITextInput extends RNTextInputProps {
  icon?: any | string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;

const SIZE = theme.borderRadii.m * 2;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

export const TextInput: FC<ITextInput> = ({validator, icon, ...props}) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);

  const reColor: keyof typeof theme.colors =
    state === Pristine ? "text" : (state === Valid) ? "success" : "danger";

  const color = theme.colors[reColor];

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  }

  const onChangeInputText = (val: string) => {
    setInput(val);
    if (state !== Pristine) {
      validate();
    }
  }
  return (
    <Box flexDirection={"row"}
         alignItems={"center"}
         height={48}
         borderRadius={"m"}
         borderWidth={StyleSheet.hairlineWidth * 3}
         borderColor={reColor}>
      <Box padding={"s"} >
        <Icon name={icon} {...{color}} size={16}/>
      </Box>

      <Box flex={1}>
        <RNTextInput
          {...props}
          onBlur={validate}
          onChangeText={onChangeInputText}
          placeholderTextColor={color}
        />
      </Box>
      {
        (state === Valid || state === Invalid) && (
          <Box borderRadius={"xl"}
               height={SIZE}
               width={SIZE}
               marginRight={"s"}
               alignItems={"center"}
               justifyContent={"center"}
               backgroundColor={state === Valid ? "success" : "danger"}>
            <Icon name={state === Valid ? "check" : "x"} color={"white"} size={12}/>
          </Box>
        )
      }
    </Box>
  )
}
