import React, { useContext } from 'react'
import styled from 'styled-components'
import { TemperatureContext } from '../contexts/TemperatureContexts'

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 30%;
`
const InputWrapper = styled.input`
    display: flex;
    width:100%;
    height:40px;
    margin: 20px;
    border: none;
    border-radius:20px;
    box-shadow: 0px 0px 20px 0px #e2e2e2;
    padding-left:20px;
    text-align:center;
    outline: none;
`
const Input = (props) => {

    const inputCon = useContext(TemperatureContext)

    const handleOnchange = (event) => {
        inputCon.value = event.target.value;
        props.unit === 'Celsius' ? inputCon.updateFahrenheit(inputCon.value) : inputCon.updateCelsius(inputCon.value);
    }
    return (
        <Wrapper>
            <InputWrapper value={props.unit === 'Celsius' ? inputCon.tempInC : inputCon.tempInF} type='number' id={props.unit} placeholder={`Enter the temperature in ${props.unit}`} onChange={handleOnchange} />
        </Wrapper>
    )
}
export default Input