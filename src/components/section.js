import React from "react"
import styled from "@emotion/styled"

const SectionContainer = styled.div `
  padding: 2.5%;
`

const SectionTitle = styled.h1 `
  color: #000;
  text-align: center;
  margin-bottom: 1%;
`

const SectionLine = styled.hr `
  background-color: #FDDB67;
  width: 60%;
  height: 5px;
  margin-left: 40%;
  margin-bottom: 1%;
`




const Section = ({ sectionTitle }) => (
    <SectionContainer>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <SectionLine />
    </SectionContainer>
)

export default Section
