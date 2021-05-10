import React, { useEffect, useState } from 'react';
import { Box, Text, theme } from "../../components/Theme";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer/authActions";
import Button from "../../components/Button";
import { RootState } from '../../redux/store';
import Container from '../../components/Container';
import { usersAPI } from '../../redux/api/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
const token = AsyncStorage.getItem('userToken');

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state: RootState) => state.auth);
  const [userId, setUserId] = useState(0);

  const handleLogout = () => {
    console.log('tap');
    dispatch(logout());
  }

  useEffect(() => {
    AsyncStorage.getItem('userId')
    .then((r: any) => {
      setUserId(r);
    })
    .catch(e => console.log(e));
  }, []);
  return (
    <Box flex={1} alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        flex={4}
        borderRadius={"l"}
        padding="xl"
        width={350}
        marginVertical="xl"
        alignItems={"center"}
        justifyContent="space-around"
        backgroundColor="grey"
      >
        <Box backgroundColor="primary_greenLight"
          top={20}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"xl"} width={100} height={100}>
          <Text variant="body">{userEmail.substr(0, 1).toUpperCase()}</Text>
        </Box>
        <Box>
          <Text variant="title1" textAlign="center">
            user:{userEmail}
          </Text>
          <Text variant="body" textAlign="center">
            {userEmail}
          </Text>
          <Text variant="body" textAlign="center">id :{userId}</Text>
        </Box>
      </Box>
      <Box marginBottom={"xl"} flex={1}>
        <Button variant={"primary"} label={"Выход"} onPress={handleLogout} />
      </Box>
    </Box>

  )
}

export default SettingsScreen;
