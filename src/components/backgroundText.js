import React from "react"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Slide from 'react-reveal/Slide'


const HomeText = styled.h1 `
  z-index: 100;
  color: #fff;
  font-size: 3em;
  font-weight: 800;
  padding-top: 15%;
`

const HomeSubText = styled.h3 `
  color: #fff;
`

const ArrowContainer = styled.div `
  padding-top: 15%;
  font-size: 3em;
  color: #FDDB67;
  -moz-animation: bounce 4s infinite;
  -webkit-animation: bounce 4s infinite;
  animation: bounce 4s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`

const BackgroundText = () => (
    <>
        <HomeText>Sean Patrick Carroll</HomeText>
        <Slide bottom>
            <HomeSubText>Developer | Engineer | Entrepreneur</HomeSubText>
        </Slide>
        <ArrowContainer><FontAwesomeIcon icon={faArrowDown}/></ArrowContainer>
    </>
)

export default BackgroundText
