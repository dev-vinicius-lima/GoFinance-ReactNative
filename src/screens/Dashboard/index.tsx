import React from "react";
import HighlightCard from "../../components/HighlightCard";
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
  HighlightCards,
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
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.400,00"
          lastTransaction="Última entrada dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="total"
        />
      </HighlightCards>
    </Container>
  );
}
