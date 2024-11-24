// External Libraries
import React from "react";

// Components

// Styles
import { Container } from "./styles";
import { IReservation } from "../../../../types/IReservation";
import { Text, Image, HStack, VStack } from "@chakra-ui/react";

interface Props {
  reservation: IReservation;
}

export const TravelListItem: React.FC<Props> = ({ reservation }) => {
  // Função para calcular a diferença em dias
  const calculateNumberOfDays = (
    startDate: string,
    endDate: string
  ): number => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffInTime = end.getTime() - start.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24)); // Converter para dias
    return diffInDays;
  };

  const numberOfDays = calculateNumberOfDays(
    reservation.startDate,
    reservation.endDate
  );

  return (
    <Container>
      <HStack>
        <Image
          src={reservation.place?.image}
          alt="Descrição da imagem"
          width="150px"
          height="150px"
          objectFit="cover"
          borderRadius="12px"
        />

        <VStack gap={0} align="flex-start">
          <Text fontWeight={500} fontSize={20}>
            Reserva em {reservation.place.title}
          </Text>

          <Text fontWeight={400} fontSize={18} color="gray.600">
            {reservation.place.description}
          </Text>

          <Text fontWeight={400} fontSize={18} color="gray.600">
            R$ {reservation?.price} · {numberOfDays}{" "}
            {numberOfDays === 1 ? "noite" : "noites"}
          </Text>

          <Text fontWeight={400} fontSize={18} color="gray.600">
            Check-in: {new Date(reservation.startDate).toLocaleDateString()}
          </Text>

          <Text fontWeight={400} fontSize={18} color="gray.600">
            Check-out: {new Date(reservation.endDate).toLocaleDateString()}
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};
