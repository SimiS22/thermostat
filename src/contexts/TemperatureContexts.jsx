import React, { useState } from 'react';

export const TemperatureContext = React.createContext({
    tempInC: '',
    tempInF: '',
    updateCelsius: () => { },
    updateFahrenheit: () => { }
});

export const TemperatureContextProvider = ({ children }) => {
    const [tempInCelsius, setTempInCelsius] = useState('');
    const [tempInFahrenheit, setTempInFahrenheit] = useState('');

    const updateCelsius = (inputValue) => {
        setTempInFahrenheit(inputValue);
        setTempInCelsius((inputValue - 32) / 1.8);
    }

    const updateFahrenheit = (inValue) => {
        console.log({ inValue })
        setTempInCelsius(inValue);
        setTempInFahrenheit((inValue * 1.8) + 32);
    }
    console.log({ tempInFahrenheit, tempInCelsius })
    return (
        <TemperatureContext.Provider value={{ tempInC: tempInCelsius, tempInF: tempInFahrenheit, updateCelsius, updateFahrenheit }}>
            {children}
        </TemperatureContext.Provider>
    )
}
