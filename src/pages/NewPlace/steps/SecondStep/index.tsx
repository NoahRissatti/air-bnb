// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { cardData } from "./constants";
import { Card } from "../../../../components/Card";

export const SecondStep: React.FC = () => {
  return (
    <Container>
      <Heading fontWeight={500} fontSize={'36px'}>Qual das seguintes opções descreve melhor seu espaço?</Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} icon={card.icon}/>
          ))}
        </SimpleGrid>
    </Container>
  );
};
