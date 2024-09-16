// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { CounterRow } from "./components/CounterRow";
import { Divider } from "../../../../components/Divider";
import { IPlace } from "../../../../types/IPlace";

interface Props {
  form: IPlace;
  handleFormChange: (key: keyof IPlace, value: any) => void;
}

export const QuadComponent: React.FC<Props> = ({ form, handleFormChange }) => {
  return (
    <Container>
      <Flex direction={"column"} gap={"2.5rem"} w={"40rem"}>
        <Heading fontWeight={500} fontSize={"36px"}>
          Vamos começar pelo básico
        </Heading>

        <Flex direction={"column"} gap={"0.5rem"}>
          <Text color={"black"} fontWeight={500} fontSize={"18px"}>
            Quantas pessoas podem se hospedar aqui?
          </Text>

          <Flex direction={"column"}>
            <CounterRow
              title="Hóspedes"
              value={form.guests}
              onChange={(v) => handleFormChange("guests", v)}
            />

            <Divider />

            <CounterRow
              title="Quartos"
              value={form.rooms}
              onChange={(v) => handleFormChange("rooms", v)}
            />

            <Divider />

            <CounterRow
              title="Camas"
              value={form.beds}
              onChange={(v) => handleFormChange("beds", v)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
