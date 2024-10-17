// External Libraries
import React, { useState } from "react";

// Components

// Styles
import { Container } from "./styles";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import { Card } from "../../../../components/Card";
import { IPlace } from "../../../../types/IPlace";
import { typeOfPlaceData } from "../../../../constants";
import { Footer } from "../../components/Footer";

interface Props {
  form: IPlace;
  handleFormChange: (key: keyof IPlace, value: any) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export const SecondStep: React.FC<Props> = ({
  form,
  handleFormChange,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [selected, setSelected] = useState(form.typeId || 0);

  function handleClick(id: number) {
    setSelected(id);
    handleFormChange("typeId", id);
  }

  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight="100vh"
    >
      <Container>
        <Heading fontWeight={500} fontSize={"36px"}>
          Qual das seguintes opções descreve melhor seu espaço?
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {typeOfPlaceData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              id={card.id}
              onClick={handleClick}
              selected={selected === card.id}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Footer
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    </Flex>
  );
};
