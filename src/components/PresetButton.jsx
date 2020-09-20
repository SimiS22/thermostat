import React, { useContext } from 'react'
import styled from 'styled-components'
import { TemperatureContext } from '../contexts/TemperatureContexts'

const ButtonWrapper = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 20px;
    width: 10%;
    height: 40px;
    border-radius: 20px;
    outline: none;
    margin-top:40px;
    border:none;
`;
const presets = {
    freezingPoint: 0,
    boilingPoint: 100,
    bodyTemp: 37
}
export const PresetButton = (props) => {
    const inputCon = useContext(TemperatureContext);
    const handlePresetClick = () => {
        if (props.preset === 'Freezing Point') {
            inputCon.tempInC = presets.freezingPoint;
            inputCon.updateFahrenheit(inputCon.tempInC)
        }
        else if (props.preset === 'Boiling Point') {
            inputCon.tempInC = presets.boilingPoint;
            inputCon.updateFahrenheit(inputCon.tempInC)
        }
        else {
            inputCon.tempInC = presets.bodyTemp;
            inputCon.updateFahrenheit(inputCon.tempInC)
        }
    }
    return (
        <ButtonWrapper onClick={handlePresetClick}>{props.preset}</ButtonWrapper>
    )
}