// External Libraries
import React from "react";

// Components

// Styles
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface Props {
  // Props
}

export const NineComponent: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Flex
      w={"100%"}
      direction={{ base: "column", md: "row" }}
      gap={"24px"}
      align={"center"}
      p={["4", "6", "8"]}
    >
      <Flex direction={"column"} w={{ base: "100%", md: "60%" }} gap={"12px"}>
        <Text fontSize={"lg"} fontWeight={600}>
          Etapa 3
        </Text>

        <Heading fontSize={"48px"} fontWeight={600}>
          Conclua e publique
        </Heading>

        <Text fontSize={"lg"} fontWeight={400}>
          Por fim, você poderá configurar
          os preços e publicar seu anúncio.
        </Text>
      </Flex>

      <Flex w={{ base: "100%", md: "40%" }} justify={"center"} align={"center"}>
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
