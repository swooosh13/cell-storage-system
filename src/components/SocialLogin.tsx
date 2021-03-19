import React, {ReactNode} from 'react';
import Svg, {ClipPath, Defs, G, Path} from "react-native-svg";
import theme, {Box, Text} from "./Theme";

const SIZE = theme.borderRadii.l;

export const Google = () => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 27 27"
      fill="none"
    >
      <Path
        d="M24.531 11.297h-.906v-.047H13.5v4.5h6.358A6.747 6.747 0 016.75 13.5a6.75 6.75 0 016.75-6.75c1.72 0 3.286.65 4.478 1.71l3.182-3.183A11.198 11.198 0 0013.5 2.25C7.287 2.25 2.25 7.287 2.25 13.5S7.287 24.75 13.5 24.75s11.25-5.037 11.25-11.25c0-.754-.078-1.49-.219-2.203z"
        fill="#FFC107"
      />
      <Path
        d="M3.547 8.264l3.696 2.71A6.747 6.747 0 0113.5 6.75c1.72 0 3.286.65 4.478 1.71l3.182-3.183A11.198 11.198 0 0013.5 2.25c-4.321 0-8.069 2.44-9.953 6.014z"
        fill="#FF3D00"
      />
      <Path
        d="M13.5 24.75c2.906 0 5.546-1.112 7.543-2.92l-3.482-2.947A6.698 6.698 0 0113.5 20.25a6.747 6.747 0 01-6.347-4.47l-3.668 2.827C5.347 22.25 9.128 24.75 13.5 24.75z"
        fill="#4CAF50"
      />
      <Path
        d="M24.531 11.297h-.906v-.047H13.5v4.5h6.358a6.773 6.773 0 01-2.299 3.134l.002-.001 3.482 2.946c-.247.224 3.707-2.704 3.707-8.329 0-.754-.078-1.49-.219-2.203z"
        fill="#1976D2"
      />
    </Svg>
  )
}

const FacebookIcon = () => {
  return  <Svg
    width={25}
    height={25}
    viewBox="0 0 27 27"
    fill="none"
  >
    <G clipPath="url(#prefix__clip0)">
      <Path fill="#fff" d="M0 0h27v27H0z" />
      <Path
        d="M25.51 27A1.49 1.49 0 0027 25.51V1.49A1.49 1.49 0 0025.51 0H1.49A1.49 1.49 0 000 1.49v24.02C0 26.333.667 27 1.49 27h24.02z"
        fill="#395185"
      />
      <Path
        d="M18.63 27V16.544h3.51l.525-4.075h-4.036V9.869c0-1.18.328-1.984 2.02-1.984l2.158-.001V4.239c-.374-.05-1.654-.161-3.144-.161-3.112 0-5.242 1.899-5.242 5.386v3.005h-3.518v4.075h3.518V27h4.208z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h27v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
}

const AppleIcon = () => {
  return <Svg
    width={25}
    height={25}
    viewBox="0 0 27 27"
    fill="none"
  >
    <Path
      d="M19.707 14.125c-.01-1.798.804-3.154 2.45-4.153-.92-1.318-2.313-2.043-4.148-2.183C16.27 7.652 14.37 8.8 13.674 8.8c-.736 0-2.418-.965-3.741-.965-2.732.043-5.635 2.178-5.635 6.524 0 1.284.235 2.61.704 3.976.627 1.798 2.89 6.204 5.25 6.133 1.233-.03 2.106-.876 3.712-.876 1.558 0 2.365.876 3.742.876 2.38-.035 4.427-4.04 5.023-5.843-3.194-1.506-3.022-4.409-3.022-4.501zm-2.771-8.042c1.337-1.587 1.215-3.032 1.176-3.552-1.182.069-2.547.804-3.325 1.709-.857.97-1.36 2.17-1.253 3.522 1.276.098 2.442-.558 3.402-1.68z"
      fill="#000"
    />
  </Svg>
}

interface ISocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({children}: ISocialIconProps) => {
  return (
    <Box marginHorizontal={"m"} backgroundColor={"white"}
         width={47}
         height={47}
         borderRadius="xl"
         alignItems={"center"}
         justifyContent={"center"}>
      {children}
    </Box>
  )
}



export const SocialLogin = () => {
  return (
    <Box flexDirection={"row"} justifyContent={"center"}>
      <SocialIcon>
        <Google/>
      </SocialIcon>
      <SocialIcon>
        <FacebookIcon />
      </SocialIcon>
      <SocialIcon>
        <AppleIcon />
      </SocialIcon>
    </Box>
  )
}

export default SocialLogin;
