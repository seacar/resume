import React from "react"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Typist from 'react-typist'


const HomeText = styled.h1 `
  z-index: 100;
  color: #fff;
  font-size: 3em;
  font-weight: 800;
  padding-top: 25%;
`

const TypingTextColored = styled.span `
  z-index: 100;
  color: #fff;
  font-size: 2em;
  font-weight: 600;
`

const ArrowContainer = styled.div `
  padding-top: 15%;
  font-size: 3em;
  color: #FDDB67;
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;

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
        <Typist
            cursor={{show: false}}
            startDelay={1000}
            avgTypingDelay={120}
            >
            <TypingTextColored>Developer</TypingTextColored>
            <Typist.Backspace count={9} delay={300} />
            <TypingTextColored>Engineer</TypingTextColored>
            <Typist.Backspace count={8} delay={300} />
            <TypingTextColored>Entrepreneur</TypingTextColored>
            <Typist.Backspace count={12} delay={300} />
        </Typist>
        <ArrowContainer><FontAwesomeIcon icon={faArrowDown}/></ArrowContainer>
    </>
)

export default BackgroundText
