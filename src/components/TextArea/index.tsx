import React from "react";
import { Textarea, FormControl, FormHelperText } from "@chakra-ui/react";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  maxLength,
  placeholder = "",
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <Textarea
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={placeholder}
        fontSize={"24px"}
      />

      <FormHelperText>
        {value.length}/{maxLength}
      </FormHelperText>
    </FormControl>
  );
};

export default TextArea;
