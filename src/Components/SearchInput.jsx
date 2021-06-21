import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';




export const SearchInput = ({ value, onChange, onSubmit }) => {
    return (
        <StyledTextInput
            onChangeText={onChange}
            value={value}
            onSubmitEditing={onSubmit}
            placeholder="Search Music By Artist Name or Song Name...."
        />
    )
  }

  export const StyledTextInput = styled(TextInput)`
  padding: 10px;
  border: 3px solid #e85b50;
  font-size: 16px;
  background-color: white;
  &:focus {
    border: 3px solid #e85b50;
    border-radius: 5px;
}`