// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, Text } from "@chakra-ui/react";
import EditableInput from "../../../../components/EditableInput";
import { IPlace } from "../../../../types/IPlace";

interface Props {
  form: IPlace;
  handleFormChange: (key: keyof IPlace, value: any) => void;
}

export const TenComponent: React.FC<Props> = ({ form, handleFormChange }) => {
  return (
    <Container>
      <Flex direction={"column"} gap={"0.5rem"}>
        <Heading fontWeight={500} fontSize={"36px"}>
          Agora, determine seu preço
        </Heading>

        <Text fontSize={"lg"} fontWeight={400}>
          Você pode alterá-lo quando quiser.
        </Text>
      </Flex>

      <EditableInput
        value={form.price}
        onValueChange={(v) => handleFormChange("price", v)}
      />
    </Container>
  );
};
