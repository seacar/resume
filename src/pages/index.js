import React from "react"

import SEO from "../components/seo"
import Background from "../components/background"
import Section from "../components/section"
import Footer from "../components/footer"
import SectionItem from "../components/sectionItem"

import styled from "@emotion/styled"

import "../components/layout.css"

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
  <>
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
      <SectionInfoInner>
        <SectionItem sectionItemTitle="ADK Group" sectionItemYears="September 2019 - August 2020" sectionItemHighlight="Drupal Developer" />
        <SectionItem sectionItemTitle="3BL Media" sectionItemYears="January 2019 - August 2019" sectionItemHighlight="Lead Devops Engineer" />
        <SectionItem sectionItemYears="February 2017 - January 2019" sectionItemHighlight="Web Developer" />
        <SectionItem sectionItemTitle="Georgia Insitute of Technology" sectionItemYears="August 2012 - August 2016" sectionItemHighlight="IT Student Assistant" />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Skills" />
    <SectionInfoInner>
      <SectionItem sectionItemTitle="Drupal" />
      <SectionItem sectionItemTitle="React" />
      <SectionItem sectionItemTitle="Gatsby" />
      <SectionItem sectionItemTitle="Node" />
      <SectionItem sectionItemTitle="Python" />
      <SectionItem sectionItemTitle="Acquia" />
      <SectionItem sectionItemTitle="Docker" />
      <SectionItem sectionItemTitle="Lando" />
      <SectionItem sectionItemTitle="Jira" />
      <SectionItem sectionItemTitle="AWS" />
      <SectionItem sectionItemTitle="MatLAB" />
    </SectionInfoInner>
    <Section sectionTitle="Hobbies" />
    <SectionInfoInner>
      <SectionItem sectionItemTitle="Scuba Diving" />
      <SectionItem sectionItemTitle="Cycling" />
      <SectionItem sectionItemTitle="Cooking" />
    </SectionInfoInner>
    <Footer />
  </>
)

export default IndexPage
