// External Libraries
import React, { useState } from "react";

// Components

// Styles
import { Container } from "./styles";
import { typeOfPlaceData } from "../../constants";
import { FilterItem } from "./components/FilterItem";
import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { placesMock } from "../../types/IPlace";
import { PlaceListIten } from "./components/PlaceListIten";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useNavigate } from "react-router-dom";

interface Props {
  // Props
}

export const Home: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  function handleClick(id: number) {
    setSelected(id);
  }

  const handleNavigate = () => {
    navigate("/new-place");
  };

  const handlePlaceClick = () => {
    window.open("/place", "_blank");
  };
  return (
    <Container>
      <HStack
        p={"20px 80px"}
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent={"space-between"}
      >
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

      <VStack p={"20px 80px"}>
        <HStack spacing={2}>
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

        <SimpleGrid columns={[3, 4, 5, 6]} spacing={6} w="100%">
          {placesMock.map((item, index) => (
            <PlaceListIten
              key={index}
              place={item}
              onClick={handlePlaceClick}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
