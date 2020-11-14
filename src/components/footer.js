import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const FooterContainer = styled.footer `
  width: 100%;
  background-color: #663399;
  color: #fff;
  padding: 2%;
  text-align: center;
`

const FooterLink = styled.a `
    color: #B5D83C;
    text-decoration: none;
`

const FooterHiglight = styled.span `
    color: #B5D83C;
`

const Footer = (props) => (
    <StaticQuery
      query={graphql`
        {
            currentBuildDate {
                currentDate
            }
        }
        `}
      render={data => (
        <FooterContainer>
            <div>"Code is like humor, if you have to explain it it's bad"</div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <FooterLink href="https://www.gatsbyjs.com">Gatsby</FooterLink>
            {` | `}
            Updated: <FooterHiglight>{ data.currentBuildDate.currentDate }</FooterHiglight>
        </FooterContainer>
      )}
    />
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

