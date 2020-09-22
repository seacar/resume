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
    color: #000;
    text-decoration: none;
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
            © {new Date().getFullYear()}, Built with
            {` `}
            <FooterLink href="https://www.gatsbyjs.com">Gatsby</FooterLink>
            {` | `}
            Last Updated: { data.currentBuildDate.currentDate }
        </FooterContainer>
      )}
    />
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

