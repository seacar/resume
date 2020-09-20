import React from "react"
import styled from "@emotion/styled"

import Typist from 'react-typist';


const HomeText = styled.h1 `
  z-index: 100;
  color: #fff;
  font-size: 3em;
  font-weight: 800;
  padding-top: 25%;
`

const TypingText = styled.span `
  z-index: 100;
  color: #fff;
  font-size: 2em;
  font-weight: 600;
`
const TypingTextColored = styled.span `
  z-index: 100;
  color: #FDDB67;
  font-size: 2em;
  font-weight: 600;
`

const BackgroundText = () => (
    <>
        <HomeText>I'm Sean</HomeText>
        <Typist
            cursor={{show: false}}
            >
            <TypingText>A </TypingText>
            <TypingTextColored>Developer</TypingTextColored>
            <Typist.Backspace count={10} delay={300} />
            <TypingText>n </TypingText>
            <TypingTextColored>Engineer</TypingTextColored>
            <Typist.Backspace count={8} delay={300} />
            <TypingTextColored>Entrepreneur</TypingTextColored>
            <Typist.Backspace count={15} delay={300} />
            <TypingTextColored>Me</TypingTextColored>
        </Typist>
    </>
)

export default BackgroundText
