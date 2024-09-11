// External Libraries
import React from "react";

// Components

// Styles
import { Flex, Heading, Text } from "@chakra-ui/react";
import TextArea from "../../../../components/TextArea";

interface Props {
  // Props
}

export const EightComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Flex w={'40rem'} direction={"column"} gap={"1.5rem"}>
      <Flex direction={"column"} gap={"0.25rem"}>
        <Heading fontSize={"38px"} fontWeight={600}>
          Crie sua descrição
        </Heading>

        <Text fontSize={"18px"} fontWeight={400} color={"gray"}>
          Explique o que sua acomodação tem de especial.
        </Text>
      </Flex>

      <TextArea maxLength={500} placeholder="Digite aqui..." />
    </Flex>
  );
};
