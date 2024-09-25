import React from "react";
import {
  Container,
  Header,
  IconPower,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from "../Dashboard/styles";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: "https://github.com/dev-vinicius-lima.png" }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Vinicius</UserName>
            </User>
          </UserInfo>
          <IconPower name="power-off" />
        </UserWrapper>
      </Header>
    </Container>
  );
}
