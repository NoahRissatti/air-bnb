import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Grid,
  Image,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "./styles";
import { FloatingInput } from "../../components/Input";
import { Divider } from "../../components/Divider";
import { SelectQuantityDropbox } from "./components/SelectQuantityDropbox";
import { HomeSVG } from "../../assets/icons/NewPlace/Home";
import {
  cardAmenity,
  cardFavorites,
  cardSecurity,
} from "../NewPlace/steps/SixComponent/constants";
import { TitledIcon } from "./components/TitledIcon";
import { IPlace } from "../../types/IPlace";
import { typeOfPlaceData } from "../../constants";

export const Place: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [place, setPlace] = useState<IPlace | null>(null);

  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const today = new Date();

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const [checkin, setCheckIn] = useState<string>(formatDate(twoDaysAgo));
  const [checkOut, setCheckOut] = useState<string>(formatDate(today));

  const handleNavigate = () => {
    navigate("/new-place");
  };

  const queryParams = new URLSearchParams(location.search);
  const placeId = queryParams.get("id");

  const amenities = [...cardFavorites, ...cardAmenity, ...cardSecurity];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IPlace>(
          `http://localhost:3001/api/places/${placeId}`
        );
        setPlace(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, [placeId]);

  const calculateTotalPrice = () => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkOut);
    const differenceInTime = checkoutDate.getTime() - checkinDate.getTime();
    const numberOfNights = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return place?.price ? numberOfNights * Number(place.price) : 0;
  };

  const totalPrice = calculateTotalPrice();

  const getTitleById = (id: number) => {
    const place = typeOfPlaceData.find((item) => item.id === id);
    return place ? place.title : "Título não encontrado";
  };

  return (
    <Container>
      <HStack
        p="20px 0px"
        w="100%"
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="center"
      >
        <HStack w="55%" justifyContent="space-between">
          <HStack>
            <HomeSVG />
            <Heading
              fontWeight={600}
              fontSize="24px"
              cursor="pointer"
              fontFamily="'Poppins', sans-serif"
              color="deeppink"
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
            <Text fontWeight={600} cursor="pointer">
              Vou hospedar
            </Text>
          </Box>
        </HStack>
      </HStack>

      <VStack p="20px 0px" w="70rem" alignItems="flex-start">
        <Heading fontWeight={500} fontSize="28px" mb="12px" alignSelf="start">
          {place?.title}
        </Heading>
        <Image
          src={place?.image}
          alt="Descrição da imagem"
          width="100%"
          height="500px"
          objectFit="cover"
          borderRadius="12px"
        />
        <HStack justifyContent="space-between" w="100%" mt="16px" gap="6rem">
          <VStack
            w="80rem"
            gap="1rem"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <VStack gap="0px" alignItems="flex-start">
              <Text fontWeight={500} fontSize="24px">
                {`Espaço inteiro: ${getTitleById(Number(place?.typeId))} em ${
                  place?.address?.city
                }, ${place?.address?.country}`}
              </Text>
              <Text fontWeight={400} fontSize="18px">
                {`${place?.guests} hóspedes ${place?.beds} camas ${place?.rooms} quartos`}
              </Text>
            </VStack>
            <Divider />
            <Text fontWeight={400} fontSize="18px" p="0.5rem 0rem">
              {place?.description}
            </Text>
            <Divider />
            <Text fontWeight={500} fontSize="22px">
              O que esse lugar oferece
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
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
            display="flex"
            flexDirection="column"
            gap="12px"
          >
            <HStack alignItems="end" gap="4px">
              <Text fontWeight="500" fontSize="26px">
                R${place?.price}
              </Text>
              <Text color="gray.600" fontSize="18px" mb="2px">
                noite
              </Text>
            </HStack>

            <HStack spacing="12px" width="100%">
              <FloatingInput
                label="CHECK-IN"
                value={checkin}
                onChange={(value) => setCheckIn(value)}
                type="date"
                min={new Date().toISOString().split("T")[0]}
              />
              <FloatingInput
                label="CHECK-OUT"
                value={checkOut}
                onChange={(value) => setCheckOut(value)}
                type="date"
                min={new Date().toISOString().split("T")[0]}
              />
            </HStack>

            <SelectQuantityDropbox />

            <Button
              bg="deeppink"
              color="white"
              _hover={{ bg: "hotpink" }}
              size="md"
              w="100%"
            >
              Reservar
            </Button>

            <HStack justifyContent={"space-between"}>
              <Text fontWeight="400" fontSize="18px" mt="4">
                R${place?.price} x{" "}
                {calculateTotalPrice() / Number(place?.price) || 0} noites
              </Text>

              <Text fontWeight="400" fontSize="18px" mt="4">
                R${totalPrice}
              </Text>
            </HStack>

            <HStack justifyContent={"space-between"}>
              <Text fontWeight="600" fontSize="20px" mt="2">
                Total
              </Text>

              <Text fontWeight="600" fontSize="20px" mt="2">
                R${totalPrice}
              </Text>
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};
