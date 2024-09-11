// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { CounterRow } from "./components/CounterRow";
import { Divider } from "../../../../components/Divider";

interface Props {
  // Props
}

export const QuadComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <Flex direction={"column"} gap={"2.5rem"} w={'40rem'}>
        <Heading fontWeight={500} fontSize={"36px"}>
          Vamos começar pelo básico
        </Heading>

        <Flex direction={"column"} gap={'0.5rem'}>
          <Text color={"black"} fontWeight={500} fontSize={"18px"}>
            Quantas pessoas podem se hospedar aqui?
          </Text>

          <Flex direction={"column"}>
            <CounterRow title="Hóspedes" />

            <Divider />

            <CounterRow title="Quartos" />

            <Divider />

            <CounterRow title="Camas" />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
