import React, {FC} from 'react';
import { Text, StyleSheet} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import {useTheme} from "@shopify/restyle";
import {Theme} from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 15,
    textAlign: 'center'
  }
})

interface IButton {
  variant?: "default" | "primary" | "transparent";
  label: string;
  onPress?: () => void
}

const Button: FC<IButton> = ({variant, label, onPress}) => {
  const theme = useTheme<Theme>();

  const backgroundColor = variant === "primary"
    ? theme.colors.primary
    : variant === "transparent"
    ? "transparent"
    : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.button;

  return (
   <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
       <Text style={[styles.label, {color}]}>{label}</Text>
   </RectButton>
  )
};

Button.defaultProps = {variant : "default"}

export default Button;
