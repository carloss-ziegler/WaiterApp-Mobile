import styled from "styled-components/native";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 8px;
  width: 80px;
`;

export const Icon = styled.View`
  background-color: #fff;
  height: 44px;
  width: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.3});
  elevation: 2;
`;
