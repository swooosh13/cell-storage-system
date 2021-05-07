import React, { useState, FC } from 'react';
import { Modal, Text, Button as RNButton, TouchableOpacity } from 'react-native';
import Button from "../../../components/Button";
import { Box, theme } from '../../../components/Theme';

interface IUpdateModal {
  visible: boolean;
  name?: string;
  description?: string;
  sector?: string;
  position?: string;
  toggleVisible?: (() => void) | undefined;
}

const UpdateModal: FC<IUpdateModal> = ({ name, description, sector, position, visible, toggleVisible }) => {
  const onCancel = () => toggleVisible();
  return (
    <Modal animationType="slide" visible={visible}>
      <Text>Modal window</Text>
      <Box flexDirection={"row"} alignItems={"center"} justifyContent="center">
        <TouchableOpacity activeOpacity={0.78}>
          <Button onPress={() => toggleVisible} variant={"default"} label={"отмена"}
            style={{ backgroundColor: theme.colors.grey, marginLeft: 10, width: 100 }} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.78}>
          <Button onPress={onCancel} variant={"primary"} label={"переместить"}
            style={{ backgroundColor: theme.colors.success, marginLeft: 10 }} />
        </TouchableOpacity>
      </Box>

    </Modal>
  )
}

export default UpdateModal;
