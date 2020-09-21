import React from "react"
import styled from "@emotion/styled"
import Fade from 'react-reveal/Fade'

const StyledSectionItemContainer = styled.div `
  margin-bottom: 3%;
`

const StyledSectionItemTitle = styled.h2 `
  color: #663399;
`

const StyledSectionItemHighlight = styled.h4 `
`

const StyledSectionItemYears = styled.p `
  font-style: italic;
  padding: 0;
  margin: 0;
`

const StyledSectionItemDescription = styled.p `

`

const SectionItem = ({ sectionItemTitle, sectionItemYears, sectionItemHighlight, sectionItemDescription }) => (
    <Fade bottom>
        <StyledSectionItemContainer>
            <StyledSectionItemTitle>{sectionItemTitle}</StyledSectionItemTitle>
            <StyledSectionItemYears>{sectionItemYears}</StyledSectionItemYears>
            <StyledSectionItemHighlight>{sectionItemHighlight}</StyledSectionItemHighlight>
            <StyledSectionItemDescription>{sectionItemDescription}</StyledSectionItemDescription>
        </StyledSectionItemContainer>
    </Fade>
)

export default SectionItem
