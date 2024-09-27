import React from "react";
import {
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
  Amount,
} from "./styles";

interface HighlightCardProps {
  type?: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

const IconMap = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export default function index({
  type,
  title,
  amount,
  lastTransaction,
}: HighlightCardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={IconMap[type as keyof typeof IconMap]} type={type} />
      </Header>
      <Amount type={type}>{amount}</Amount>
      <LastTransaction type={type}>{lastTransaction}</LastTransaction>
    </Container>
  );
}
