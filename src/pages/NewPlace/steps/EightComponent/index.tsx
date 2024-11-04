// External Libraries
import React from "react";

// Components

// Styles
import { Flex, Heading, Text } from "@chakra-ui/react";
import TextArea from "../../../../components/TextArea";
import { IPlace } from "../../../../types/IPlace";
import { Footer } from "../../components/Footer";
import Swal from "sweetalert2";

interface Props {
  form: IPlace;
  handleFormChange: (key: keyof IPlace, value: any) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export const EightComponent: React.FC<Props> = ({
  form,
  handleFormChange,
  handleNextStep,
  handlePreviousStep,
}) => {
  function handleVerificationStep() {
    if (form.description.length === 0) {
      Swal.fire({
        title: "Atenção!",
        text: "Descrição é um campo obrigatório",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#3085d6",
      });
    } else {
      handleNextStep();
    }
  }

  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight="100vh"
    >
      <Flex w={"40rem"} direction={"column"} gap={"1.5rem"}>
        <Flex direction={"column"} gap={"0.25rem"}>
          <Heading fontSize={"38px"} fontWeight={600}>
            Crie sua descrição
          </Heading>

          <Text fontSize={"18px"} fontWeight={400} color={"gray"}>
            Explique o que sua acomodação tem de especial.
          </Text>
        </Flex>

        <TextArea
          maxLength={500}
          placeholder="Digite aqui..."
          value={form.description}
          onChange={(v) => handleFormChange("description", v)}
        />
      </Flex>

      <Footer
        handleNextStep={handleVerificationStep}
        handlePreviousStep={handlePreviousStep}
      />
    </Flex>
  );
};
