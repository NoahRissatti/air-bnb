import React, { useEffect, useState } from "react";
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

  const handleNavigateToTravels = () => {
    navigate("/travels");
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
          `http://localhost:3001/api/places`,
          {
            params: {
              typeId: selected,
            },
          }
        );

        setPlaces(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, [selected]);

  return (
    <Container>
      <HStack
        p={"15px 80px"}
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent={"space-between"}
      >
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
          {places.length > 0 ? ( // Verifica se existem lugares
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
            </Text> // Mensagem quando vazio
          )}
        </Box>
      </VStack>
    </Container>
  );
};
