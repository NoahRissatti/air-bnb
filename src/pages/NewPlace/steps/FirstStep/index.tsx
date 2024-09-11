// External Libraries
import React from "react";

// Components

// Styles
import { Flex, Heading, Text } from "@chakra-ui/react";

export const FirstStep: React.FC = () => {
  return (
    <Flex w={"60%"} direction={"column"} gap={"12px"}>
      <Text fontSize={"lg"} fontWeight={600}>
        Etapa 1
      </Text>

      <Heading fontSize={"48px"} fontWeight={600} w={"60%"}>
        Descreva sua acomodação
      </Heading>

      <Text fontSize={"lg"} fontWeight={400}>
        Nessa etapa, perguntaremos que tipo de propriedade você deseja anunciar
        e se os hóspedes poderão reservar o espaço inteiro ou apenas um quarto.
        Em seguida, informe a localização e quantas pessoas podem se hospedar.
      </Text>
    </Flex>
  );
};
