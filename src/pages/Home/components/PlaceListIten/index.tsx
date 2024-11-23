import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { IPlace } from "../../../../types/IPlace";

interface Props {
  place: IPlace;
  onClick: (place: IPlace) => void;
}

export const PlaceListIten: React.FC<Props> = ({ place, onClick }) => {
  return (
    <Box
      borderRadius="md"
      backgroundColor="white"
      w={{
        base: "80%",
        sm: "calc(90%)",
        md: "calc(50% - 12px)",
        lg: "300px",
      }}
      h="auto"
      cursor={"pointer"}
      onClick={() => onClick(place)}
      mb={4}
    >
      <Image
        src={place.image}
        alt={`${place.address.city}, ${place.address.country}`}
        w="100%"
        h="270px"
        objectFit="cover"
        borderRadius={14}
      />

      <Box mt={2}>
        <Text fontWeight={600}>
          {place.address.city}, {place.address.country}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold">
            R${place.price}
          </Text>{" "}
          noite
        </Text>
      </Box>
    </Box>
  );
};
