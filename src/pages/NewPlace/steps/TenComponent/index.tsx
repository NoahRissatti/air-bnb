// External Libraries
import React, { useState } from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, Text } from "@chakra-ui/react";
import EditableInput from "../../../../components/EditableInput";

interface Props {
  // Props
}

export const TenComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const [price, setPrice] = useState<string>("R$70");

  const handlePriceChange = (newValue: string) => {
    setPrice(newValue);
  };

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
        value={price}
        onValueChange={handlePriceChange}
      />
    </Container>
  );
};
