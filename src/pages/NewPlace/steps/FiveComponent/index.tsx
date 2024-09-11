import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface Props {
  // Props
}

export const FiveComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Flex w={"80%"} direction={{ base: "column", md: "row" }} gap={"24px"} align={"center"} p={["4", "6", "8"]}>
      <Flex
        direction={"column"}
        w={{ base: "100%", md: "60%" }}
        gap={"12px"}
      >
        <Text fontSize={"lg"} fontWeight={600}>
          Etapa 2
        </Text>

        <Heading fontSize={"48px"} fontWeight={600}>
          Faça sua acomodação se destacar
        </Heading>

        <Text fontSize={"lg"} fontWeight={400}>
          Nessa etapa, você adicionará algumas das comodidades que sua acomodação
          oferece, além de 5 fotos ou mais. Depois, você deverá criar um título e
          uma descrição.
        </Text>
      </Flex>

      <Flex
        w={{ base: "100%", md: "40%" }}
        justify={"center"}
        align={"center"}
      >
        <Image
          src="https://img.freepik.com/psd-gratuitas/ilustracao-de-casa-e-propriedade-3d_23-2151682344.jpg"
          alt="Imagem ilustrativa"
          boxSize={{ base: "100%", md: "400px" }}
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};
