import { useState } from "react";
import {
  Keyboard,
  Modal,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { Form, Header, Input, ModalBody, Overlay } from "./styles";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handlePressWithoutFeedback() {
    table.length > 0 ? Keyboard.dismiss() : onClose();
  }

  function handleSave() {
    setTable("");
    onSave(table);
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={handlePressWithoutFeedback}>
        <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
          <ModalBody>
            <Header>
              <Text weight="600">Informe a mesa</Text>

              <TouchableOpacity onPress={onClose}>
                <Close color="#666" />
              </TouchableOpacity>
            </Header>

            <Form>
              <Input
                value={table}
                placeholder="Número da mesa"
                keyboardType="numeric"
                onChangeText={(text) => setTable(text)}
              />

              <Button disabled={table.length === 0} onPress={handleSave}>
                Salvar
              </Button>
            </Form>
          </ModalBody>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
