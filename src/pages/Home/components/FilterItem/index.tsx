import React from "react";
import { Text, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface InfoCardProps {
  title: string;
  icon: IconType;
  id: number;
  selected: boolean;
  onClick: (id: number) => void;
}

export const FilterItem: React.FC<InfoCardProps> = ({
  title,
  icon,
  id,
  onClick,
  selected,
}) => {
  return (
    <Flex
      overflow="hidden"
      direction={"column"}
      align={"center"}
      p={4}
      gap={"0.5rem"}
      transition="box-shadow 0.3s ease, background-color 0.3s ease"
      backgroundColor={"white"}
      cursor="pointer"
      onClick={() => onClick(id)}
      _hover={{
        boxShadow: "0 2px 0 0 lightgray",
      }}
    >
      <Icon as={icon} w={6} h={6} />

      <Text fontWeight={500} fontSize={"14px"}>
        {title}
      </Text>
    </Flex>
  );
};
