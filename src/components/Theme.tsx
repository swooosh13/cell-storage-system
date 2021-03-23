import React, {FC} from 'react';
import {ViewStyle, TextStyle, ImageStyle} from "react-native";
import {createBox, createText, createTheme, useTheme as useReTheme} from "@shopify/restyle";

export const theme  = createTheme( {
  colors: {
    primary: '#5294f1',
    secondary: "#0C0D34",
    body: 'white',
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.5)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
    button: '#0C0D34',
    red: 'red',
    darkGrey: '#8A8D90',
    danger: '#FF0058',
    success: '#33cd63',
    primaryLight: '#e6f7f9',
    primary_green: '#29afa5',
    primary_analogue: '#2956af',
    primary_greenLight: "#e3f5f5"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center"
    },
    title: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-Semibold',
      color: "secondary"
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-Semibold',
      color: "secondary"
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProDisplay-Semibold',
      color: "secondary"
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: "text"
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Medium',
      color: "text"
    }
  },
  breakpoints: {}
});

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = {[P in keyof T] : ViewStyle | TextStyle | ImageStyle};

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const theme = useTheme();
  return styles(theme);
}
