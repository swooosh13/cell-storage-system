import React, {FC, ReactNode} from 'react';
import {Dimensions, StyleSheet, Platform} from "react-native";
import {Box, useTheme} from "./Theme";
import {LinearGradient} from "expo-linear-gradient";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

interface IContainerProps {
  children?: ReactNode;
  footer?: ReactNode;
}

export const assets = [require('../../assets/tech_life.png')];
const {width, height: wHeight} = Dimensions.get('window');

const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Container: FC<IContainerProps> = ({children, footer}) => {
  const inserts = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)} backgroundColor={"secondary"}>

        <Box backgroundColor={"white"}>
          <Box borderBottomLeftRadius={"xl"}
               overflow="hidden"
               height={height * 0.3}>
            <LinearGradient colors={["#00d2ff", '#3a7bd5']}
                            start={{x: 1, y: 0}}
                            end={{x: 0, y: 0}}
                            style={{
                              width,
                              height,
                              borderBottomLeftRadius: theme.borderRadii.xl
                            }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow={"hidden"}>
          <LinearGradient colors={["#00d2ff", '#3a7bd5']}
                          start={{x: 1, y: 0}}
                          end={{x: 0, y: 0}}
                          style={{
                            ...StyleSheet.absoluteFillObject,
                            width,
                            height,
                            top: -height * 0.4
                          }}
          />
          <Box backgroundColor={"white"}
               borderTopLeftRadius={0}
               borderRadius={"xl"}
               flex={1}>
            <KeyboardAwareScrollView>
              {children}
            </KeyboardAwareScrollView>
          </Box>
        </Box>

        <Box backgroundColor={"secondary"} paddingVertical={"s"} paddingTop={"m"} marginBottom={"l"}>
          {footer}
          <Box height={inserts.bottom}/>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  )
}

export default Container;
