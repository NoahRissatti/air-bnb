// External Libraries
import React from "react";

// Components

// Styles
import { Flex, Heading, Text,  } from "@chakra-ui/react";
import TextArea from "../../../../components/TextArea";

interface Props {
  // Props
}

export const SevenComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Flex w={"60%"} direction={"column"} gap={"1.5rem"}>
      <Flex direction={"column"} gap={"0.25rem"}>
        <Heading fontSize={"38px"} fontWeight={600}>
          Agora, vamos dar um título à sua acomodação (pousada)
        </Heading>

        <Text fontSize={"18px"} fontWeight={400} color={"gray"}>
          Títulos curtos funcionam melhor. Não se preocupe, você poderá fazer
          alterações depois.
        </Text>
      </Flex>

      <TextArea maxLength={32} placeholder="Digite aqui..." />
    </Flex>
  );
};