// External Libraries
import React, { useEffect, useState } from "react";

// Components

// Styles
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Container } from "./styles";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IReservation } from "../../types/IReservation";
import { TravelListItem } from "./components/TravelListItem";

export const Travels: React.FC = () => {
  const [reservations, setReservations] = useState<IReservation[]>([]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/new-place");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IReservation[]>(
          `http://localhost:3001/api/reservations`
        );

        setReservations(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <HStack
        p={"15px 80px"}
        w={"100%"}
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent={"center"}
      >
        <HStack maxWidth={"80rem"} w={"100%"} justifyContent={"space-between"}>
          <HStack gap={"5px"} onClick={handleGoHome} cursor={"pointer"}>
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
          </HStack>
        </HStack>
      </HStack>

      <VStack maxWidth={"80rem"} w={"100%"} paddingTop={"2.5rem"}>
        <Heading fontWeight={500} fontSize={32} paddingBottom={"2.5rem"}>
          Viagens
        </Heading>

        <VStack w={"100%"}>
          {reservations.map((item) => (
            <TravelListItem reservation={item} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};
