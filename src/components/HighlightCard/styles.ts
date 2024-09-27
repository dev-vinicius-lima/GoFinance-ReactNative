import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  flex: 1;
  background-color: ${({ type }: TypeProps) =>
    type === "total" ? theme.colors.seccondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  margin-right: 16px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};
  color: ${({ type }: TypeProps) =>
    type === "total" ? theme.colors.shape : theme.colors.textDark};
`;
export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${(type: TypeProps) =>
    type.type === "up" &&
    css`
      color: ${theme.colors.sucess};
    `};
  ${(type: TypeProps) =>
    type.type === "down" &&
    css`
      color: ${theme.colors.attention};
    `};
  ${(type: TypeProps) =>
    type.type === "total" &&
    css`
      color: ${theme.colors.shape};
    `};
`;

export const Amount = styled.Text<TypeProps>`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ type }: TypeProps) =>
    type === "total" ? theme.colors.shape : theme.colors.textDark};
  margin-top: 38px;
`;
export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.regular};
  color: ${({ type }: TypeProps) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
export const Footer = styled.Text``;
