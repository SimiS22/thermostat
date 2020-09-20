import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Input from './components/Input'
import Header from './components/Header'
import IncDecButtons from './components/IncDecButtons'
import "./styles.css";
import { PresetButton } from "./components/PresetButton";
import { TemperatureContext, TemperatureContextProvider } from './contexts/TemperatureContexts'
import styled from 'styled-components'

const PresetWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
`
const InputDivWrapper = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
`
const UnitWrapper = styled.h4`
  color: #3e36bc;
`

function App() {
  const inputVal = useContext(TemperatureContext)
  return (
    <div className="App">
      <Header />
      <InputDivWrapper>
        <UnitWrapper>Degree Celsius</UnitWrapper>
        <IncDecButtons type={{ action: 'dec', unit: 'Celsius' }} />
        <Input unit={'Celsius'} >{inputVal.tempInC}</Input>
        <IncDecButtons type={{ action: 'inc', unit: 'Celsius' }} />
      </InputDivWrapper >
      <InputDivWrapper>
        <UnitWrapper>Degree Fahrenheit</UnitWrapper>
        <IncDecButtons type={{ action: 'dec', unit: 'Fahrenheit' }} />
        <Input unit={'Fahrenheit'}>{inputVal.tempInF}</Input>
        <IncDecButtons type={{ action: 'inc', unit: 'Fahrenheit' }} />
      </InputDivWrapper>
      <PresetWrapper>
        <PresetButton preset={'Freezing Point'} />
        <PresetButton preset={'Body Temperature'} />
        <PresetButton preset={'Boiling Point'} />
      </PresetWrapper>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TemperatureContextProvider>
    <App />
  </TemperatureContextProvider>
  , rootElement);
