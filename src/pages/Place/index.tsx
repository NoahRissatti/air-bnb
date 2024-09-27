// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useNavigate } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { SelectQuantityDropbox } from "./components/SelectQuantityDropbox";

interface Props {
  // Props
}

export const Place: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/new-place");
  };

  return (
    <Container>
      <HStack
        p={"20px 0px"}
        w={"100%"}
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent={"center"}
      >
        <HStack w={"55%"} justifyContent={"space-between"}>
          <HStack>
            <HomeSVG />

            <Heading
              fontWeight={600}
              fontSize={"24px"}
              cursor={"pointer"}
              fontFamily="'Poppins', sans-serif"
              color={"deeppink"}
            >
              homebnb
            </Heading>
          </HStack>

          <Box
            display="inline-block"
            _hover={{
              backgroundColor: "gray.100",
              borderRadius: "40px",
            }}
            p={3}
            onClick={handleNavigate}
          >
            <Text fontWeight={600} cursor={"pointer"}>
              Vou hospedar
            </Text>
          </Box>
        </HStack>
      </HStack>

      <VStack p={"20px 0px"} w={"55%"} alignItems={"flex-start"}>
        <Heading
          fontWeight={500}
          fontSize={"28px"}
          mb={"12px"}
          alignSelf={"start"}
        >
          Oásis Urbano | Metro Faria Lima | Piscina |Co-Work
        </Heading>

        <Box width="100%" height="500px" bg="gray.300" borderRadius={"12px"} />

        <HStack
          justifyContent={"space-between"}
          w={"100%"}
          mt={"16px"}
          gap={"6rem"}
        >
          <VStack
            gap={"1rem"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <VStack gap={"0px"} alignItems={"flex-start"}>
              <Text fontWeight={500} fontSize={"24px"}>
                Espaço inteiro: apartamento em São Paulo, Brasil
              </Text>

              <Text fontWeight={400} fontSize={"18px"}>
                4 hóspedes 1 quarto 2 camas 1 banheiro
              </Text>
            </VStack>

            <Divider />

            <Text fontWeight={400} fontSize={"18px"} p={"0.5rem 0rem"}>
              Imagine abrir seus olhos toda manhã com vistas espetaculares, em
              um espaço cheio de oportunidades. A poucos passos da Faria Lima.
            </Text>

            <Divider />

            <Text fontWeight={500} fontSize={"22px"}>
              O que esse lugar oferece
            </Text>
          </VStack>

          <Box
            width="55%"
            padding="20px"
            borderRadius="12px"
            boxShadow="lg"
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <HStack alignItems={"end"} gap={"4px"}>
              <Text fontWeight="500" fontSize="26px">
                R$353
              </Text>
              <Text color={"gray.600"} fontSize={"18px"} mb={"2px"}>
                noite
              </Text>
            </HStack>

            <SelectQuantityDropbox />
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};
