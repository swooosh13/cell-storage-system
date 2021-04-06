import React from 'react';
import {Box, Text} from "../../components/Theme";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer/authActions";
import Button from "../../components/Button";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <Box flex={1}
         flexDirection={"column"}
         alignItems={"center"}
         justifyContent={"flex-end"}>
      <Box flex={1} justifyContent={"center"}>
        <Box>
          <Text>Settings screen</Text>
        </Box>

      </Box>
      <Box marginBottom={"l"}>
        <Button variant={"primary"} label={"quit"} onPress={handleLogout}/>
      </Box>

    </Box>
  )
}

export default SettingsScreen;
