import { useState, useEffect, useRef } from "react";
import { Box, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

interface SelectQuantityDropboxProps {
  adults: number;
  children: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

export const SelectQuantityDropbox = ({
  adults,
  children,
  setAdults,
  setChildren,
}: SelectQuantityDropboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleClick = () => setIsOpen(!isOpen);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) =>
    setter((prev) => prev + 1);

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) =>
    setter((prev) => (prev > 0 ? prev - 1 : 0));

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
        <VStack gap="0px" alignItems="start">
          <Text fontWeight="700" fontSize="10px">
            HÓSPEDES
          </Text>
          <Text fontWeight="500" fontSize="14px">
            {adults + children} hóspede{adults + children > 1 ? "s" : ""}
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
          <VStack align="start" spacing={4}>
            <HStack justify="space-between" width="100%">
              <Text>Adultos</Text>
              <HStack>
                <IconButton
                  aria-label="Decrement"
                  icon={<Text>-</Text>}
                  size="sm"
                  onClick={() => decrement(setAdults)}
                  isDisabled={adults <= 1}
                />
                <Text>{adults}</Text>
                <IconButton
                  aria-label="Increment"
                  icon={<Text>+</Text>}
                  size="sm"
                  onClick={() => increment(setAdults)}
                />
              </HStack>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>Crianças</Text>
              <HStack>
                <IconButton
                  aria-label="Decrement"
                  icon={<Text>-</Text>}
                  size="sm"
                  onClick={() => decrement(setChildren)}
                  isDisabled={children <= 0}
                />
                <Text>{children}</Text>
                <IconButton
                  aria-label="Increment"
                  icon={<Text>+</Text>}
                  size="sm"
                  onClick={() => increment(setChildren)}
                />
              </HStack>
            </HStack>
          </VStack>
        </Box>
      )}
    </VStack>
  );
};
