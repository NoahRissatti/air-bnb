import React from "react";
import { Text, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface InfoCardProps {
  title: string;
  icon: IconType;
}

export const Card: React.FC<InfoCardProps> = ({ title, icon }) => {
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      direction={"column"}
      p={4}
      gap={'0.5rem'}
      transition="box-shadow 0.3s ease"
      _hover={{ 
        boxShadow: "0 0 0 2px black" 
      }}

      cursor="pointer"
    >
      <Icon as={icon} w={8} h={8}  />

      <Text size="md" fontWeight={500} fontSize={'17px'}>{title}</Text>
    </Flex>
  );
};
