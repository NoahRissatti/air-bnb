import { useState, ChangeEvent, FocusEvent, useEffect } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface FloatingInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  mb?: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  placeholder = "",
  value = "",
  onChange,
  type = "text",
  mb,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <FormControl position="relative" mb={mb || "0px"}>
      <FormLabel
        position="absolute"
        top={isFocused || inputValue ? "6px" : "50%"}
        left="12px"
        fontSize={isFocused || inputValue ? "xs" : "sm"}
        color="gray.500"
        transition="all 0.2s"
        pointerEvents="none"
        transform={
          isFocused || inputValue ? "translateY(0)" : "translateY(-50%)"
        }
      >
        {label}
      </FormLabel>
      <Input
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isFocused ? "" : placeholder}
        focusBorderColor="black"
        height="52px"
        paddingTop="24px"
        fontWeight={400}
      />
    </FormControl>
  );
};
