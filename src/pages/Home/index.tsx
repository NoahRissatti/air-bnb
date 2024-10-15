// External Libraries
import React, { useEffect, useState } from "react";

// Components

// Styles
import { Container } from "./styles";
import { typeOfPlaceData } from "../../constants";
import { FilterItem } from "./components/FilterItem";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { IPlace } from "../../types/IPlace";
import { PlaceListIten } from "./components/PlaceListIten";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  // Props
}

export const Home: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const [selected, setSelected] = useState(0);
  const [places, setPlaces] = useState<IPlace[]>([]);
  const navigate = useNavigate();

  function handleClick(id: number) {
    setSelected(id);
  }

  const handleNavigate = () => {
    navigate("/new-place");
  };

  const handlePlaceClick = (place: IPlace) => {
    console.log(place.id);

    const url = `/place?id=${place.id}`;

    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IPlace[]>(
          "http://localhost:3001/api/places"
        );

        setPlaces(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, []);

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

        <Box
          display="flex"
          flexWrap="wrap"
          gap={6}
          w="100%"
          justifyContent={"center"}
        >
          {places.map((item, index) => (
            <PlaceListIten
              key={index}
              place={item}
              onClick={handlePlaceClick}
            />
          ))}
        </Box>
      </VStack>
    </Container>
  );
};
