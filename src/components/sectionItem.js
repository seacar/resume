import React from "react"
import styled from "@emotion/styled"

const StyledSectionItemContainer = styled.div `
  margin-bottom: 3%;
`

const StyledSectionItemTitle = styled.h2 `
  color: #663399;
`

const StyledSectionItemHighlight = styled.h4 `
    margin: 0;
    padding: 0;
`

const StyledSectionItemYears = styled.p `
  font-style: italic;
`

const SectionItem = ({ sectionItemTitle, sectionItemYears, sectionItemHighlight }) => (
    <StyledSectionItemContainer>
        <StyledSectionItemTitle>{sectionItemTitle}</StyledSectionItemTitle>
        <StyledSectionItemHighlight>{sectionItemHighlight}</StyledSectionItemHighlight>
        <StyledSectionItemYears>{sectionItemYears}</StyledSectionItemYears>
        
    </StyledSectionItemContainer>
)

export default SectionItem
