import React, { useEffect } from 'react';
import { Box, Text, theme } from "../../components/Theme";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer/authActions";
import Button from "../../components/Button";
import { RootState } from '../../redux/store';
import Container from '../../components/Container';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state: RootState) => state.auth);

  console.log(userEmail);

  const handleLogout = () => {
    console.log('tap');
    dispatch(logout());
  }



  return (
    <Box flex={1} alignItems={"center"}
      flexDirection={"column"}
      >
      <Box
        flex={4}
        borderRadius={"l"}
        paddingHorizontal="xl"
        width={300}
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
            {userEmail.substr(0, 5)}
          </Text>
          <Text variant="body" textAlign="center">
            {userEmail}
          </Text>
        </Box>


      </Box>

      <Box marginBottom={"xl"} flex={1}>
        <Button variant={"primary"} label={"Sign Out"} onPress={handleLogout} />
      </Box>
    </Box>

  )
}

export default SettingsScreen;
