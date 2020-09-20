import React from "react"

import SEO from "../components/seo"
import Background from "../components/background"
import Section from "../components/section"
import Footer from "../components/footer"
import SectionItem from "../components/sectionItem"

import styled from "@emotion/styled"

const HeaderContainer = styled.div `
  width: 100%;
  height: 100vh;
`

const SectionInfo = styled.div `
  width: 60%;
  padding: 0;
  margin-left: 20%;
  text-align: center;
`

const IndexPage = () => (
  <>
    <HeaderContainer>
      <Background />
      <SEO title="Home" />
    </HeaderContainer>
    <Section sectionTitle="Education" />
    <SectionInfo>
            <SectionItem sectionItemTitle="Georgia Insitute of Technology" sectionItemYears="2011-2016" />
            <SectionItem sectionItemTitle="University of Pennsylvania - Wharton School of Business" sectionItemYears="2018" />
    </SectionInfo>
    <Section sectionTitle="Experience" />
    <SectionInfo>
            <SectionItem sectionItemTitle="Georgia Insitute of Technology" />
    </SectionInfo>
    <Section sectionTitle="Skills" />
    <SectionInfo>
            <SectionItem sectionItemTitle="Georgia Insitute of Technology" />
    </SectionInfo>
    <Footer />
  </>
)

export default IndexPage
