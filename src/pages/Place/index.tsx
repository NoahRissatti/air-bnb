// External Libraries
import React, { useEffect, useState } from "react";

// Components

// Styles
import { Container } from "./styles";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { SelectQuantityDropbox } from "./components/SelectQuantityDropbox";
import axios from "axios";
import { IPlace, IPlaceBack } from "../../types/IPlace";
import {
  cardAmenity,
  cardFavorites,
  cardSecurity,
} from "../NewPlace/steps/SixComponent/constants";
import { Card } from "../../components/Card";
import { TitledIcon } from "./components/TitledIcon";

interface Props {
  // Props
}

export const Place: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [place, setPlace] = useState<IPlaceBack | null>(null);

  const handleNavigate = () => {
    navigate("/new-place");
  };

  const queryParams = new URLSearchParams(location.search);
  const placeId = queryParams.get("id");

  const amenities = [...cardFavorites, ...cardAmenity, ...cardSecurity];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IPlaceBack>(
          `http://localhost:3001/api/places/${placeId}`
        );

        setPlace(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, []);

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

      <VStack p={"20px 0px"} w={"70rem"} alignItems={"flex-start"}>
        <Heading
          fontWeight={500}
          fontSize={"28px"}
          mb={"12px"}
          alignSelf={"start"}
        >
          {place?.title}
        </Heading>

        <Box width="100%" height="500px" bg="gray.300" borderRadius={"12px"} />

        <HStack
          justifyContent={"space-between"}
          w={"100%"}
          mt={"16px"}
          gap={"6rem"}
        >
          <VStack
            w={"80rem"}
            gap={"1rem"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <VStack gap={"0px"} alignItems={"flex-start"}>
              <Text fontWeight={500} fontSize={"24px"}>
                {`Espaço inteiro: ${place?.typeId} em ${place?.address?.city}, ${place?.address?.country}`}
              </Text>

              <Text fontWeight={400} fontSize={"18px"}>
                {`${place?.guests} hóspedes ${place?.beds} camas ${place?.rooms} quartos`}
              </Text>
            </VStack>

            <Divider />

            <Text fontWeight={400} fontSize={"18px"} p={"0.5rem 0rem"}>
              {place?.description}
            </Text>

            <Divider />

            <Text fontWeight={500} fontSize={"22px"}>
              O que esse lugar oferece
            </Text>

            <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
              {amenities
                .filter((item) => place?.amenities.includes(item.id.toString()))
                .map((card, index) => (
                  <TitledIcon key={index} title={card.title} icon={card.icon} />
                ))}
            </Grid>
          </VStack>

          <Box
            width="50rem"
            padding="20px"
            borderRadius="12px"
            boxShadow="lg"
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <HStack alignItems={"end"} gap={"4px"}>
              <Text fontWeight="500" fontSize="26px">
                R${place?.price}
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
