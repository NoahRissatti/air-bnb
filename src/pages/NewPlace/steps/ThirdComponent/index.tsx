// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AddressForm } from "./components/AddressForm";
import { IPlace } from "../../../../types/IPlace";
import { Footer } from "../../components/Footer";

interface Props {
  form: IPlace;
  handleFormChange: (key: keyof IPlace, value: any) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export const ThirdComponent: React.FC<Props> = ({
  form,
  handleFormChange,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight="100vh"
    >
      <Container>
        <Flex direction={"column"} gap={"1.5rem"}>
          <Flex direction={"column"} gap={"0.5rem"}>
            <Heading fontWeight={500} fontSize={"36px"}>
              Onde fica sua acomodação?
            </Heading>

            <Text color={"gray"}>
              Seu endereço só é compartilhado com os hóspedes depois que a
              reserva é confirmada.
            </Text>
          </Flex>

          <AddressForm form={form} handleFormChange={handleFormChange} />
        </Flex>
      </Container>

      <Footer
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    </Flex>
  );
};
