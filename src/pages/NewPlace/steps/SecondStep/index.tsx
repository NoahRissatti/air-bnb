// External Libraries
import React, { useState } from "react";

// Components

// Styles
import { Container } from "./styles";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { cardData } from "./constants";
import { Card } from "../../../../components/Card";
import { IPlace } from "../../../../types/IPlace";

interface Props {
  form: IPlace;
  handleFormChange: (key: keyof IPlace, value: any) => void;
}

export const SecondStep: React.FC<Props> = ({ form, handleFormChange }) => {
  const [selected, setSelected] = useState(form.typeId || 0);

  function handleClick(id: number) {
    setSelected(id)
    handleFormChange('typeId',id)
  }

  return (
    <Container>
      <Heading fontWeight={500} fontSize={"36px"}>
        Qual das seguintes opções descreve melhor seu espaço?
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {cardData.map((card, index) => (
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
  );
};
