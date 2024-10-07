import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IPlace } from "../../../../types/IPlace";

interface Props {
  place: IPlace;
  onClick: () => void;
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
      onClick={onClick}
      mb={4}
    >
      <Box bg="gray.300" w="100%" h={270} borderRadius={14} />

      <Box mt={2}>
        <Text fontWeight={600}>
          {place.address.city}, {place.address.country}
        </Text>
        <Text>{place.price} noite</Text>
      </Box>
    </Box>
  );
};
