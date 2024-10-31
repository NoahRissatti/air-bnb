// External Libraries
import React from "react";

// Components

// Styles
import { Text, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  icon: IconType;
}

export const TitledIcon: React.FC<Props> = ({ title, icon }) => {
  return (
    <Flex overflow="hidden" direction={"row"} gap={"1rem"}>
      <Icon as={icon} w={6} h={6} />

      <Text size="md" fontWeight={400} fontSize={"17px"}>
        {title}
      </Text>
    </Flex>
  );
};
