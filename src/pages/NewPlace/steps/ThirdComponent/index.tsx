// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AddressForm } from "./components/AddressForm";

interface Props {
  // Props
}

export const ThirdComponent: React.FC<Props> = () => {
  return (
    <Container>
      <Flex direction={"column"} gap={"1.5rem"}>
        <Flex direction={"column"} gap={"0.5rem"}>
          <Heading fontWeight={500} fontSize={"36px"}>
            Onde fica sua acomodação?
          </Heading>

          <Text color={"gray"}>
            Seu endereço só é compartilhado com os hóspedes depois que a reserva
            é confirmada.
          </Text>
        </Flex>

       <AddressForm/>
      </Flex>
    </Container>
  );
};
