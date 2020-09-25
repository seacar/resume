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

const StyledProjectItemDescription = styled.p `

`

const StyledLink = styled.a `
  color: #663399;
  text-decoration: none;
`

const ProjectItem = ({ projectItemTitle, projectItemTech, projectItemDescription, projectItemLink }) => (
    <Fade bottom>
        <StyledProjectItemContainer>
            <StyledProjectItemTitle><StyledLink href={projectItemLink} target="_blank">{projectItemTitle} <FontAwesomeIcon  icon={faExternalLinkAlt}/></StyledLink></StyledProjectItemTitle>
            <StyledProjectItemTech>{projectItemTech}</StyledProjectItemTech>
            <StyledProjectItemDescription>{projectItemDescription}</StyledProjectItemDescription>
        </StyledProjectItemContainer>
    </Fade>
)

export default ProjectItem
