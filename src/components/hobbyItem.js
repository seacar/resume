import React from "react"
import styled from "@emotion/styled"
import Fade from 'react-reveal/Fade'

const StyledProjectItemContainer = styled.div `
  
`

const StyledProjectItemTitle = styled.h2 `
  color: #663399;
  padding-top: 3%;
`

const StyledProjectItemImage = styled.img `
  width: 80%;
`

const HobbyItem = ({ hobbyItemTitle, hobbyItemImage }) => (
    <Fade bottom>
        <StyledProjectItemContainer>
            <StyledProjectItemImage src={hobbyItemImage}></StyledProjectItemImage>
            <StyledProjectItemTitle>{hobbyItemTitle}</StyledProjectItemTitle>
        </StyledProjectItemContainer>
    </Fade>
)

export default HobbyItem
