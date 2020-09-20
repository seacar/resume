import React from "react"
import styled from "@emotion/styled"

const FooterContainer = styled.footer `
  width: 100%;
  background-color: #663399;
  color: #fff;
  padding: 2%;
  text-align: center;
`

const FooterLink = styled.a `
    color: #000;
    text-decoration: none;
`

const Footer = () => (
    <FooterContainer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <FooterLink href="https://www.gatsbyjs.com">Gatsby</FooterLink>
    </FooterContainer>
)

export default Footer
