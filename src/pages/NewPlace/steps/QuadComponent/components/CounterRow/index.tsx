// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Text } from "@chakra-ui/react";
import Counter from "../../../../../../components/Counter";

interface Props {
  title: string;
  value: number;
  onChange: (newValue: number) => void;
}

export const CounterRow: React.FC<Props> = ({ title, value, onChange }) => {
  return (
    <Container>
      <Text color={"black"} fontWeight={400} fontSize={"20px"}>
        {title}
      </Text>

      <Counter value={value} onChange={onChange} />
    </Container>
  );
};
