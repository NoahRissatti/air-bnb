import { useState } from "react";
import { Button, Box, Text, VStack, HStack } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <VStack spacing={4}>
      <HStack spacing={4}>
        <Button
          onClick={decrease}
          size="2.5rem"
          borderRadius="full"
          backgroundColor="white"
          border="2px"
          borderColor="gray.300"
          _hover={{ backgroundColor: "gray.100" }}
          width="2.5rem"
          height="2.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MinusIcon />
        </Button>

        <Box>
          <Text fontSize="18px">{count}</Text>
        </Box>

        <Button
          onClick={increase}
          size="2.5rem"
          borderRadius="full"
          backgroundColor="white"
          border="2px"
          borderColor="gray.300"
          _hover={{ backgroundColor: "gray.100" }}
          width="2.5rem"
          height="2.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AddIcon />
        </Button>
      </HStack>
    </VStack>
  );
};

export default Counter;
