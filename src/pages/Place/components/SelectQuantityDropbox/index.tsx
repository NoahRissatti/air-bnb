import { useState, useEffect, useRef } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const SelectQuantityDropbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boxRef]);

  return (
    <VStack align="start" ref={boxRef} position="relative">
      <Box
        as="button"
        width="100%"
        padding="10px 12px"
        borderRadius="md"
        bg="white"
        onClick={handleClick}
        textAlign="left"
        borderWidth="1px"
        borderColor="gray.200"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack gap={"0px"} alignItems={"start"}>
          <Text fontWeight="700" fontSize={"10px"}>
            HÓSPEDES
          </Text>

          <Text fontWeight="500" fontSize={"14px"}>
            1 hóspede
          </Text>
        </VStack>

        {isOpen ? (
          <ChevronUpIcon boxSize={6} />
        ) : (
          <ChevronDownIcon boxSize={6} />
        )}
      </Box>
      {isOpen && (
        <Box
          width="100%"
          padding="10px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
          position="absolute"
          zIndex={1}
          borderWidth="1px"
          borderColor="gray.300"
          top="100%"
          left={0}
        >
          <Text>Este é o texto do modal que aparece ao clicar no "box".</Text>
        </Box>
      )}
    </VStack>
  );
};
