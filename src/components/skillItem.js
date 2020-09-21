import React from "react"
import styled from "@emotion/styled"
import Fade from 'react-reveal/Fade'

const StyledSkillItemContainer = styled.div `
  margin-bottom: 3%;
`

const StyledSkillItemTitle = styled.h2 `
  color: #663399;
`

const StyledSkillItemYears = styled.p `

`

const SkillItem = ({ skillItemTitle, skillItemYears }) => (
    <Fade bottom>
        <StyledSkillItemContainer>
            <StyledSkillItemTitle>{skillItemTitle}</StyledSkillItemTitle>
            <StyledSkillItemYears>{skillItemYears}</StyledSkillItemYears>
        </StyledSkillItemContainer>
    </Fade>
)

export default SkillItem
