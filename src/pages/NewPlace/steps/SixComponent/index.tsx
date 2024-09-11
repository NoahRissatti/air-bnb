// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { cardData } from "../SecondStep/constants";
import { Card } from "../../../../components/Card";
import { cardAmenity, cardFavorites, cardSecurity } from "./constants";

interface Props {
  // Props
}

export const SixComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Flex direction={"column"} gap={'0.25rem'}>
        <Heading fontWeight={500} fontSize={"36px"} >
          Informe aos hóspedes o que seu espaço tem para oferecer
        </Heading>

        <Text fontSize={"20px"} fontWeight={400} color={"gray"}>
          Você pode adicionar mais comodidades depois de publicar.
        </Text>
      </Flex>

      <Flex direction={"column"} gap={"2.5rem"}>
        <Flex direction={"column"} gap={"1rem"}>
          <Text fontSize={"18px"} fontWeight={500} color={"black"}>
            E estes favoritos dos hóspedes?
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {cardFavorites.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} />
            ))}
          </SimpleGrid>
        </Flex>

        <Flex direction={"column"} gap={"1rem"}>
          <Text fontSize={"18px"} fontWeight={500} color={"black"}>
            Você tem alguma comodidade que merece destaque?
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {cardAmenity.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} />
            ))}
          </SimpleGrid>
        </Flex>

        <Flex direction={"column"} gap={"1rem"}>
          <Text fontSize={"18px"} fontWeight={500} color={"black"}>
            Você tem algum destes itens de segurança?
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
            {cardSecurity.map((card, index) => (
              <Card key={index} title={card.title} icon={card.icon} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Container>
  );
};
