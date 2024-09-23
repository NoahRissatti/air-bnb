// External Libraries
import React from "react";

// Components

// Styles
import { Box, Text } from "@chakra-ui/react";
import { IPlace } from "../../../../types/IPlace";

interface Props {
  place: IPlace;
}

export const PlaceListIten: React.FC<Props> = ({ place }) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      backgroundColor="white"
      w={300}
      cursor={"pointer"}
    >
      <Box
        bg="gray.300"
        w="270px"
        h="270px"
        display="block"
        borderRadius={14}
      />

      <Box mt={2}>
        <Text fontWeight={600}>
          {place.address.city}, {place.address.country}
        </Text>
        <Text>{place.price} noite</Text>
      </Box>
    </Box>
  );
};
