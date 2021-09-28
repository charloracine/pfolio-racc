import React from "react";
import { StyledInput, StyledLabel, StyledSpan } from "./Form";

const TextField = ({ label, onChange, maxLength, onEnterKey, disabled, placeholder }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnterKey();
    }
  };

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        onKeyPress={handleKeyPress}
        disabled={disabled}
      />
      <StyledSpan>{label}</StyledSpan>
    </StyledLabel>
  );
};

export default TextField;
