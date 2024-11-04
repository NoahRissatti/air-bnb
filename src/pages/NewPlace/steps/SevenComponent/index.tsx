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

export const SevenComponent: React.FC<Props> = ({
  form,
  handleFormChange,
  handleNextStep,
  handlePreviousStep,
}) => {
  function handleVerificationStep() {
    if (form.title.length === 0) {
      Swal.fire({
        title: "Atenção!",
        text: "Título é um campo obrigatório",
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
      <Flex w={"40%"} direction={"column"} gap={"1.5rem"}>
        <Flex direction={"column"} gap={"0.25rem"}>
          <Heading fontSize={"38px"} fontWeight={600}>
            Agora, vamos dar um título à sua acomodação (pousada)
          </Heading>

          <Text fontSize={"18px"} fontWeight={400} color={"gray"}>
            Títulos curtos funcionam melhor. Não se preocupe, você poderá fazer
            alterações depois.
          </Text>
        </Flex>

        <TextArea
          maxLength={32}
          placeholder="Digite aqui..."
          value={form.title}
          onChange={(v) => handleFormChange("title", v)}
        />
      </Flex>

      <Footer
        handleNextStep={handleVerificationStep}
        handlePreviousStep={handlePreviousStep}
      />
    </Flex>
  );
};
