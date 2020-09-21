import React from "react"

import SEO from "../components/seo"
import Background from "../components/background"
import Section from "../components/section"
import Footer from "../components/footer"
import SectionItem from "../components/sectionItem"
import SkillItem from "../components/skillItem"

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
    <Section id="education" sectionTitle="Education" />
    <SectionInfo>
      <SectionInfoInner>
        <SectionItem sectionItemTitle="Georgia Insitute of Technology" sectionItemYears="2016" sectionItemHighlight="BS - Materials Science and Engineering" />
        <SectionItem sectionItemTitle="University of Pennsylvania - Wharton School of Business" sectionItemYears="2018" sectionItemHighlight="Certificate - Business Analytics" />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Experience" />
    <SectionInfo>
      <SectionInfoInner>
        <SectionItem sectionItemTitle="ADK Group" sectionItemYears="September 2019 - August 2020" sectionItemHighlight="Drupal Developer" sectionItemDescription="After leaving 3BL Media I began at ADK Group, a world class digital agency, as a Drupal Developer.  In this role I have had the opportunity to work on a number of different websites mostly utilizing Drupal 8." />
        <SectionItem sectionItemTitle="3BL Media" sectionItemYears="January 2019 - August 2019" sectionItemHighlight="Lead Devops Engineer" />
        <SectionItem sectionItemYears="February 2017 - January 2019" sectionItemHighlight="Web Developer" sectionItemDescription="Upon graduation from Georgia Tech I transistioned to 3BL Media as a full time Full-Stack Web Developer working on a number of different web properties owned by 3BL.  I worked in a number of different tech stacks including Drupal 7, Drupal 8, EmberJS, NodeJS, and ReactJS." />
        <SectionItem sectionItemTitle="Georgia Insitute of Technology" sectionItemYears="August 2012 - August 2016" sectionItemHighlight="IT Student Assistant" sectionItemDescription="While enrolled at Georgia Tech I worked part time for the Office of International Education as an IT Student Assistant.  In this role I contributed to the development and maintinence of the department website (Drupals 6 and 7) and provided desktop IT support to the office of 35+ full time employees." />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Skills" />
    <SectionInfoInner>
      <SkillItem skillItemTitle="Drupal" />
      <SkillItem skillItemTitle="React" />
      <SkillItem skillItemTitle="Gatsby" />
      <SkillItem skillItemTitle="Node" />
      <SkillItem skillItemTitle="Python" />
      <SkillItem skillItemTitle="Acquia" />
      <SkillItem skillItemTitle="Docker" />
      <SkillItem skillItemTitle="Lando" />
      <SkillItem skillItemTitle="Jira" />
      <SkillItem skillItemTitle="AWS" />
      <SkillItem skillItemTitle="MatLAB" />
    </SectionInfoInner>
    <Section sectionTitle="Hobbies" />
    <SectionInfoInner>
      <SectionItem sectionItemTitle="Sailing" />
      <SectionItem sectionItemTitle="Scuba Diving" />
      <SectionItem sectionItemTitle="Cycling" />
      <SectionItem sectionItemTitle="Cooking" />
      <SectionItem sectionItemTitle="Woodworking" />
    </SectionInfoInner>
    <Footer />
  </>
)

export default IndexPage
