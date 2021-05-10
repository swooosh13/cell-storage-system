import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { theme } from "./Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usersAPI } from '../redux/api/api';

const token = AsyncStorage.getItem('userToken');
class FloatingButton extends React.Component<any, any> {

  animation = new Animated.Value(0);

  toggleMenu = () => {
    // @ts-ignore
    const toValue = this.open ? 0 : 1;

    // @ts-ignore
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: false
    }).start();

    // @ts-ignore
    this.open = !this.open;
  }

  render() {
    const addstyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70]
          })
        }
      ]
    }

    const filterstyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -130]
          })
        }
      ]
    }

    const rotation = {
      transform: [{
        rotate: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "180deg"]
        })
      }]
    }

    const opactity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    })

    const removeUserHistory = () => {
      console.log('remove item Alert')
      Alert.alert(
        `Удалить историю действий текущего пользователя ?`,
        "Подтвердите операцию",
        [
          {
            text: "Омена",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Подтвердить", onPress: async () => {

              let config = {
                headers: {
                  // @ts-ignore
                  Authorization: "Bearer " + JSON.parse(token._W)
                }
              }

              try {
                const userId = await AsyncStorage.getItem('userId');
                const resp = await usersAPI.deleteUserPosts(userId, config);
              } catch (e) {
                console.log(e);
              }
            }
          }
        ]
      );
    }
    return (
      <View style={[styles.container, this.props.style]}>

        <TouchableWithoutFeedback onPress={() => removeUserHistory()}>
          <Animated.View style={[styles.button, styles.secondary, filterstyle]}>
            <TouchableOpacity>
              <AntDesign name={"deleteuser"} size={24} color={"black"} />
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.props.openAdd()}>
          <Animated.View style={[styles.button, styles.secondary, addstyle, opactity]}>
            <TouchableOpacity>
              <AntDesign name={"plus"} size={24} color={"black"} />
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation, opactity]}>
            <TouchableOpacity>
              <AntDesign name={"arrowup"} size={24} color={"#fff"} />
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute"
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",

    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 2,
      width: 2
    },
    elevation: 7
  },
  menu: {
    backgroundColor: theme.colors.primary_analogue
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#fff",
  }
})

export default FloatingButton;
