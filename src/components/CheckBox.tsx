import React, {FC, useState} from "react";
import {TouchableOpacity, View} from 'react-native';
import CheckBox from "@react-native-community/checkbox";
import {Box, Text} from "./Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";

interface ICheckBox {
  label: string
}

export const Checkbox: FC<ICheckBox> = ({label}) => {
  const [checked, setChecked] = useState(false)

  return (
    <RectButton onPress={() => setChecked(!checked)}
                style={{justifyContent: "center"}}>
      <Box flexDirection={"row"} alignItems={"center"}>
        <Box alignItems={"center"}
             marginRight={"m"}
             justifyContent={"center"}
             height={20} width={20}
             borderRadius={"s"}
             backgroundColor={checked ? "success" : "white"}
             borderWidth={1}
             borderColor={"success"}>
          <Icon name={"check"} color={"white"}/>
        </Box>
        <Text variant={""}>{label}</Text>
      </Box>
    </RectButton>
  )
}
