import React from "react"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const SocialContainer = styled.div `
   position: absolute;
   top: 0vh;
   left: 0;
   width: 20%;
   padding-top: 5%;
   padding-left: 2%;
   z-index: 150;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: auto;
   text-align: center;
   @media (max-width: 768px) {
      width: 100%;
   }
`

const SocialIcon = styled.div `
   font-size: 2.5em;
   color: #fff;
`

const SocialIconLink = styled.a `
   text-decoration: none;
   color: #fff;
`

const Socials = ()=> (
   <SocialContainer>
      <SocialIcon>
      <SocialIconLink href="https://github.com/seacar"><FontAwesomeIcon icon={faGithub} /></SocialIconLink>
      </SocialIcon>
      <SocialIcon>
      <SocialIconLink href="https://www.linkedin.com/in/seanpcarroll1/"><FontAwesomeIcon icon={faLinkedin} /></SocialIconLink>
      </SocialIcon>
      <SocialIcon>
      <SocialIconLink href="/files/resume.pdf"><FontAwesomeIcon icon={faFilePdf} /></SocialIconLink>
      </SocialIcon>
   </SocialContainer>
  
)

export default Socials
