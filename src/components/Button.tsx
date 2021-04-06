import React, {FC} from 'react';
import {Text, StyleSheet} from "react-native";
import {RectButton} from "react-native-gesture-handler";
import {useTheme} from "@shopify/restyle";
import {Theme} from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
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
  variant?: "default" | "primary";
  label?: string;
  onPress?: () => void;
  style?: any
}

const Button: FC<IButton> = ({variant, label, onPress, children, style}) => {
  const theme = useTheme<Theme>();

  const backgroundColor = variant === "primary"
    ? theme.colors.primary
    : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton style={[styles.container, {backgroundColor}, {...style}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  )
};

Button.defaultProps = {variant: "default"}

export default Button;
