import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:70px;
    box-shadow: 0px 0px 12px 0px #e2e2e2;
    margin:0;
    margin-bottom: 50px;
    color: #3e36bc;
`

const Header = () => {
    return (
        <HeaderWrapper>
            Thermostat
        </HeaderWrapper>
    )
}
export default Header