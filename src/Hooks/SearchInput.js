import React from 'react';

export function useInput(initValue) {
    const [value, setValue] = React.useState(initValue);
    return {
        value,
        onChange: (text) => setValue(text)
    }
}