import React from "react";
import { StyledInput, StyledLabel, StyledSpan } from "./Form";

const TextField = ({ label, name, onChange, type, maxLength, onEnterKey, disabled, placeholder }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnterKey();
    }
  };

  return (
    <StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        name={name}
      />
      <StyledSpan>{label}</StyledSpan>
    </StyledLabel>
  );
};

export default TextField;
