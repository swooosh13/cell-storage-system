import React, {FC} from 'react';
import {BaseTheme, createBox, createText} from "@shopify/restyle";

export const theme: BaseTheme | any  = {
  colors: {
    primary: '#5294f1',
    body: 'white',
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, 0.7)',
    white: 'white',
    grey: 'rgba(12, 13, 52, 0.05)',
    button: '#0C0D34'
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
      color: "title"
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-Semibold',
      color: "title"
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProDisplay-Semibold',
      color: "title"
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: "text"
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Medium', // Добавить SF-Pro-TextMedium
      color: "text"
    }
  },
  breakpoints: {}
}

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export default theme;
