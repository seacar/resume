import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Slide from 'react-reveal/Slide'

import Socials from "./socials"

const HomeTextContainer = styled.div `
  position: absolute;
  top: 30vh;
  width: 100%;
  text-align: center;
  color: #fff;
`

const HomeText = styled.h1 `
  z-index: 100;
  font-size: 4em;
  font-weight: 800;
  padding-bottom: 3%;
  font-family: lobster;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`

const HomeSubText = styled.h3 `
  padding-bottom: 10%;
  font-family: rubik;
`

const ArrowContainer = styled.div `
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

const RebeccaPurple = styled.a `
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2%;
  color: #fff;
  font-style: italic;
  font-size: .9em;
  text-decoration: none;
`

const BackgroundText = () => (
    <>
        <Socials/>
        <HomeTextContainer>
          <HomeText>Sean Patrick Carroll</HomeText>
          <HomeSubText>Developer | Engineer | Entrepreneur</HomeSubText>
        <ArrowContainer><FontAwesomeIcon  icon={faArrowDown}/></ArrowContainer>
        </HomeTextContainer>
        <RebeccaPurple href="https://en.wikipedia.org/wiki/Eric_A._Meyer">rebecca purple</RebeccaPurple>
    </>
)

export default BackgroundText
