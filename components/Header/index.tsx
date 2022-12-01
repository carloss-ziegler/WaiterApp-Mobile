import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text";
import { Container, Content, DrawerButton, OrderHeader, Table } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      {!selectedTable && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text size={14} opacity={0.9}>
              Bem vindo(a) ao
            </Text>
            <Text size={24} weight={700}>
              WAITER
              <Text size={24}>APP</Text>
            </Text>
          </View>

          <DrawerButton onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu-open" size={24} color="gray" />
          </DrawerButton>
        </View>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">
              Pedido
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text weight="600" size={14} color="#D73035">
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>

          <Table>
            <Text weight="400" color="#666">
              Mesa {selectedTable}
            </Text>
          </Table>
        </Content>
      )}
    </Container>
  );
}
