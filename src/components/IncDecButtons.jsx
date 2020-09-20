import React, { useContext } from 'react'
import styled from 'styled-components'
import { TemperatureContext } from '../contexts/TemperatureContexts'

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height:40px;
    width:40px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    font-size :20px;
    font-weight: bolder;  
    margin:20px; 
`
const IncDecButtons = (props) => {
    const inputContext = useContext(TemperatureContext)
    const handlePlusClick = () => {
        props.type.unit === 'Celsius' ? inputContext.updateFahrenheit(++inputContext.tempInC) :
            inputContext.updateCelsius(++inputContext.tempInF);
        console.log({ xxx: inputContext.tempInC, fff: inputContext.tempInF })
    }
    const handleMinusClick = () => {
        props.type.unit === 'Celsius' ? inputContext.updateFahrenheit(--inputContext.tempInC) :
            inputContext.updateCelsius(--inputContext.tempInF)
    }
    return (
        <Button onClick={props.type.action === 'inc' ? handlePlusClick : handleMinusClick}>{props.type.action === 'inc' ? '+' : '-'}</Button>
    )
}
export default IncDecButtons