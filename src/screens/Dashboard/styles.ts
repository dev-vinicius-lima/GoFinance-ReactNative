import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { FontAwesome } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(28)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold};
`;

export const IconPower = styled(FontAwesome)`
  color: ${theme.colors.seccondary};
  font-size: ${RFValue(30)}px;
`;
