// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Text } from "@chakra-ui/react";
import Counter from "../../../../../../components/Counter";

interface Props {
  title: string;
}

export const CounterRow: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Text color={"black"} fontWeight={400} fontSize={"20px"}>
        {title}
      </Text>

      <Counter />
    </Container>
  );
};
