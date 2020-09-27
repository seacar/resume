import React from "react"
import styled from "@emotion/styled"
import Fade from 'react-reveal/Fade'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const StyledProjectItemContainer = styled.div `
  
`

const StyledProjectItemTitle = styled.h2 `
  color: #663399;
  padding-top: 3%;
`

const StyledProjectItemTech = styled.p `
  font-style: italic;
  padding: 0;
  margin: 0;
`

const StyledProjectItemImage = styled.img `
  width: 80%;
`

const StyledLink = styled.a `
  color: #663399;
  text-decoration: none;
`

const ProjectItem = ({ projectItemTitle, projectItemTech, projectItemImage, projectItemLink }) => (
    <Fade bottom>
        <StyledProjectItemContainer>
            <StyledProjectItemImage src={projectItemImage}></StyledProjectItemImage>
            <StyledProjectItemTitle><StyledLink href={projectItemLink} target="_blank">{projectItemTitle} <FontAwesomeIcon  icon={faExternalLinkAlt}/></StyledLink></StyledProjectItemTitle>
            <StyledProjectItemTech>{projectItemTech}</StyledProjectItemTech>
        </StyledProjectItemContainer>
    </Fade>
)

export default ProjectItem
