import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Box,
  IconButton,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { StyledInput } from "./styles";

interface EditableInputProps {
  value: string;
  onValueChange: (newValue: string) => void;
}

const EditableInput: React.FC<EditableInputProps> = ({
  value,
  onValueChange,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (inputValue !== value) {
      onValueChange(inputValue);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <FormControl>
      <Box display="flex" alignItems="center">
        {isEditing ? (
          <StyledInput
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <Box as="span" mr={2}>
           <Heading fontWeight={700} fontSize={'95px'}  maxW={'600px'}>{value}</Heading>
          </Box>
        )}
        <IconButton
          icon={<EditIcon />}
          onClick={handleEditClick}
          aria-label="Edit"
          size="sm"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          _focus={{ boxShadow: "none" }}
          border="none"
        />
      </Box>
    </FormControl>
  );
};

export default EditableInput;
