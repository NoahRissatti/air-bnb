import React, { useState, ChangeEvent } from 'react';
import { Textarea, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';

interface TextAreaProps {
  maxLength: number;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ maxLength, placeholder = '' }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <Textarea
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={placeholder}
        fontSize={'24px'}
      />

      <FormHelperText>
        {value.length}/{maxLength}
      </FormHelperText>
    </FormControl>
  );
};

export default TextArea;
