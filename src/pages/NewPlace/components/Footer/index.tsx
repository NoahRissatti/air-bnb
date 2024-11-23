// External Libraries
import React from "react";

// Components

// Styles

import { Button, Flex } from "@chakra-ui/react";

interface Props {
  handlePreviousStep?: () => void;
  handleNextStep: () => void;
  isPreviousStepDisabled?: boolean;
  isNextStepDisabled?: boolean;
}

export const Footer: React.FC<Props> = ({
  handlePreviousStep,
  handleNextStep,
  isPreviousStepDisabled = false,
  isNextStepDisabled = false,
}) => {
  return (
    <Flex
      as="footer"
      align="center"
      justifyContent="space-between"
      w="100%"
      p="1rem 3rem"
      borderTop="1px solid gray"
      bg="white"
      position="fixed"
      bottom={0}
    >
      <Button
        variant="link"
        size="lg"
        color="black"
        _hover={{ textDecoration: "none" }}
        sx={{
          textDecoration: "underline",
          textDecorationColor: "black",
          textDecorationThickness: "2px",
        }}
        onClick={handlePreviousStep}
        isDisabled={isPreviousStepDisabled}
      >
        Voltar
      </Button>

      <Button
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        size="lg"
        onClick={handleNextStep}
        isDisabled={isNextStepDisabled}
      >
        Avançar
      </Button>
    </Flex>
  );
};
