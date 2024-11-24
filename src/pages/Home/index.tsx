import React from "react";
import { Container } from "./styles";
import { typeOfPlaceData } from "../../constants";
import { FilterItem } from "./components/FilterItem";
import { Box, Heading, HStack, Text, VStack, Skeleton } from "@chakra-ui/react";
import { PlaceListIten } from "./components/PlaceListIten";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useHome } from "./hooks/useHome";

export const Home: React.FC = () => {
  const {
    places,
    selected,
    handleClick,
    handlePlaceClick,
    handleNavigate,
    handleNavigateToTravels,
  } = useHome();

  const isLoading = places.length === 0;

  return (
    <Container>
      <HStack
        p={"15px 80px"}
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent={"center"}
      >
        <HStack maxWidth={"80rem"} w={"100%"} justifyContent={"space-between"}>
          <HStack gap={"5px"}>
            <HomeSVG />
            <Heading
              fontWeight={600}
              fontSize={"20px"}
              cursor={"pointer"}
              fontFamily="'Poppins', sans-serif"
              color={"deeppink"}
            >
              homebnb
            </Heading>
          </HStack>

          <HStack>
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

            <Box
              display="inline-block"
              _hover={{
                backgroundColor: "gray.100",
                borderRadius: "40px",
              }}
              p={3}
              onClick={handleNavigateToTravels}
            >
              <Text fontWeight={600} cursor={"pointer"}>
                Viagens
              </Text>
            </Box>
          </HStack>
        </HStack>
      </HStack>

      <VStack p={"20px 80px"}>
        <HStack spacing={10}>
          {typeOfPlaceData.map((item, index) => (
            <FilterItem
              key={index}
              title={item.title}
              icon={item.icon}
              id={item.id}
              onClick={handleClick}
              selected={selected === item.id}
            />
          ))}
        </HStack>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={6}
          w="100%"
          justifyContent={"center"}
          marginTop={8}
        >
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                height="150px"
                width="200px"
                borderRadius="12px"
              />
            ))
          ) : places.length > 0 ? (
            places.map((item, index) => (
              <PlaceListIten
                key={index}
                place={item}
                onClick={handlePlaceClick}
              />
            ))
          ) : (
            <Text fontSize="lg" color="gray.500">
              Não há lugares disponíveis.
            </Text>
          )}
        </Box>
      </VStack>
    </Container>
  );
};
