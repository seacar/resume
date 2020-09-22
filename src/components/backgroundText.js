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
  font-size: 3em;
  font-weight: 800;
  padding-bottom: 3%;
`

const HomeSubText = styled.h3 `
  padding-bottom: 10%
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

const BackgroundText = () => (
    <>
        <Socials/>
        <HomeTextContainer>
          <HomeText>Sean Patrick Carroll</HomeText>
          <Slide bottom>
              <HomeSubText>Developer | Engineer | Entrepreneur</HomeSubText>
          </Slide>
        <ArrowContainer><FontAwesomeIcon  icon={faArrowDown}/></ArrowContainer>
        </HomeTextContainer>
    </>
)

export default BackgroundText
