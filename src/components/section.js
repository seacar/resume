import React from "react"
import styled from "@emotion/styled"
import Slide from 'react-reveal/Slide'

const SectionContainer = styled.div `
  padding: 2.5%;
`

const SectionTitle = styled.h1 `
  color: #000;
  text-align: center;
  margin-bottom: 1%;
`

const SectionLineRight = styled.hr `
  background-color: #FDDB67;
  width: 60%;
  height: 5px;
  margin-left: 40%;
  margin-bottom: 1%;
  border: none;
`
const SectionLineLeft = styled.hr `
  background-color: #FDDB67;
  width: 60%;
  height: 5px;
  margin-right: 40%;
  margin-bottom: 1%;
  border: none;
`




const Section = ({ sectionTitle }) => (
    <SectionContainer>
        <Slide left><SectionLineLeft /></Slide>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <Slide right><SectionLineRight /></Slide>
    </SectionContainer>
)

export default Section
