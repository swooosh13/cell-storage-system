import React, {FC, ReactNode} from 'react';
import {Dimensions, Platform} from "react-native";
import {Box, useTheme} from "./Theme";
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
      <Box height={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)} backgroundColor={"greyLight"}>

        <Box style={{marginTop: height / 3}} flex={1} overflow={"hidden"}>
          <Box backgroundColor={"white"}
               borderTopLeftRadius={"xl"}
               borderRadius={"xl"}
               flex={1}>
            <KeyboardAwareScrollView>
              {children}
            </KeyboardAwareScrollView>
          </Box>
        </Box>

        <Box backgroundColor={'greyLight'} paddingVertical={"s"} paddingTop={"m"} marginBottom={"l"}>
          {footer}
          <Box height={inserts.bottom}/>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  )
}

export default Container;
