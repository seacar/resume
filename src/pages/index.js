import React from "react"

import SEO from "../components/seo"
import Background from "../components/background"
import Section from "../components/section"
import Footer from "../components/footer"
import SectionItem from "../components/sectionItem"

import styled from "@emotion/styled"

const Container = styled.body `
  margin: 0;
  width: 100%;
`

const HeaderContainer = styled.div `
  width: 100%;
  height: 100vh;
`

const SectionInfo = styled.div `
  width: 100%;
  margin-bottom: 10%;
`

const SectionInfoInner = styled.div `
  width: 60%;
  margin-left: 20%;
  text-align: center;
`

const IndexPage = () => (
  <Container>
    <HeaderContainer>
      <Background />
      <SEO title="Home" />
    </HeaderContainer>
    <Section sectionTitle="Education" />
    <SectionInfo>
      <SectionInfoInner>
              <SectionItem sectionItemTitle="Georgia Insitute of Technology" sectionItemYears="2016" sectionItemHighlight="BS - Materials Science and Engineering" />
              <SectionItem sectionItemTitle="University of Pennsylvania - Wharton School of Business" sectionItemYears="2018" sectionItemHighlight="Certificate - Business Analytics" />
      </SectionInfoInner>
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
  </Container>
)

export default IndexPage
