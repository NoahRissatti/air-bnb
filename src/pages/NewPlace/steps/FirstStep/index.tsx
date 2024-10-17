// External Libraries
import React from "react";

// Components

// Styles
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";

interface Props {
  handleNextStep: () => void;
}

export const FirstStep: React.FC<Props> = ({ handleNextStep }) => {
  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight="100vh"
    >
      <Flex w={"40%"} direction={"column"} gap={"12px"}>
        <Text fontSize={"lg"} fontWeight={600}>
          Etapa 1
        </Text>

        <Heading fontSize={"48px"} fontWeight={600} w={"60%"}>
          Descreva sua acomodação
        </Heading>

        <Text fontSize={"lg"} fontWeight={400}>
          Nessa etapa, perguntaremos que tipo de propriedade você deseja
          anunciar e se os hóspedes poderão reservar o espaço inteiro ou apenas
          um quarto. Em seguida, informe a localização e quantas pessoas podem
          se hospedar.
        </Text>
      </Flex>

      <Footer handleNextStep={handleNextStep} isPreviousStepDisabled={true} />
    </Flex>
  );
};
