import React from "react"
import styled from "@emotion/styled"


const StyledSectionItemTitle = styled.h2 `
  
`

const StyledSectionItemYears = styled.p `
  
`


const SectionItem = ({ sectionItemTitle, sectionItemYears }) => (
    <>
        <StyledSectionItemTitle>{sectionItemTitle}</StyledSectionItemTitle>
        <StyledSectionItemYears>{sectionItemYears}</StyledSectionItemYears>
    </>
)

export default SectionItem
