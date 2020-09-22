import React from "react"

import SEO from "../components/seo"
import Background from "../components/background"
import BackgroundText from "../components/backgroundText"
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
  margin-bottom: 8%;
`

const SectionInfoInner = styled.div `
  width: 60%;
  margin-left: 20%;
  text-align: center;
`

const List = styled.ul `
  text-align: left;
  list-style-type: none;
`

const gtHighlights = 
<List>
  <li><b>Concentration:</b> Structural and Functional Materials (ie Metals, Ceramics, and Alloys)</li>
  <li><b>Certificates:</b> Business and Entrepreneurship</li>
  <li><b>Inventure Prize:</b> Semi-finalist 2012, 2014, and 2015</li>
  <li><b>Business Plan Competition:</b> Winner 2012</li>
  <li><b>Capstone Conference:</b> Undergraduate Representative at Ohio State University - Columbus, Ohio 2016</li>
  <li><b>National Science Foundation I-Corps:</b> Invited for Pitch Competition - New Orleans, Lousiana 2016</li>
</List>

const whartonHighlights = 
<List>
  <li><b>Program Overview:</b> 12 week Executive Education Program</li>
  <li><b>Topics Covered:</b> Descriptive, Predictive, and Prescriptive Analytics</li>
  <li><b>Application Based Modules:</b> Data Collection, A/B Testing, Forecasting, Visulaization, Optimization Models, And Decision Trees</li>
</List>

const IndexPage = () => (
  <>
    <HeaderContainer>
      <Background />
      <BackgroundText />
      <SEO title="Home" />
    </HeaderContainer>
    <Section id="education" sectionTitle="Education" />
    <SectionInfo>
      <SectionInfoInner>
        <SectionItem sectionItemTitle="Georgia Insitute of Technology" sectionItemYears="2016" sectionItemHighlight="BS - Materials Science and Engineering" sectionItemDescription={gtHighlights} />
        <SectionItem sectionItemTitle="University of Pennsylvania - Wharton School of Business" sectionItemYears="2018" sectionItemHighlight="Certificate - Business Analytics" sectionItemDescription={whartonHighlights} />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Experience" />
    <SectionInfo>
      <SectionInfoInner>
        <SectionItem sectionItemTitle="ADK Group" sectionItemYears="September 2019 - August 2020" sectionItemHighlight="Drupal Developer" sectionItemDescription="After leaving 3BL Media I began at ADK Group, a world class digital agency, as a Drupal Developer.  In this role I have had the opportunity to work on a number of different websites mostly utilizing Drupal 8." />
        <SectionItem sectionItemTitle="3BL Media" sectionItemYears="January 2019 - August 2019" sectionItemHighlight="Lead Devops Engineer" />
        <SectionItem sectionItemYears="February 2017 - January 2019" sectionItemHighlight="Web Developer" sectionItemDescription="Upon graduation from Georgia Tech I transistioned to 3BL Media as a full time Full-Stack Web Developer working on a number of different web properties owned by 3BL.  I worked in a number of different tech stacks including Drupal 7, Drupal 8, EmberJS, NodeJS, and ReactJS." />
        <SectionItem sectionItemTitle="Georgia Institute of Technology" sectionItemYears="August 2012 - August 2016" sectionItemHighlight="IT Student Assistant" sectionItemDescription="While enrolled at Georgia Tech I worked part time for the Office of International Education as an IT Student Assistant.  In this role I contributed to the development and maintinence of the department website (Drupals 6 and 7) and provided desktop IT support to the office of 35+ full time employees." />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Skills" />
    <SectionInfo>
      <SectionInfoInner>
        <SkillItem skillItemTitle="Drupal" skillItemYear="2012" />
        <SkillItem skillItemTitle="NodeJS" skillItemYear="2012" />
        <SkillItem skillItemTitle="Python" skillItemYear="2016" />
        <SkillItem skillItemTitle="ReactJS" skillItemYear="2017" />
        <SkillItem skillItemTitle="Acquia" skillItemYear="2017" />
        <SkillItem skillItemTitle="Atlassian Suite" skillItemYear="2017" />
        <SkillItem skillItemTitle="GatsbyJS" skillItemYear="2018" />
        <SkillItem skillItemTitle="Pantheon" skillItemYear="2018" />
        <SkillItem skillItemTitle="AWS" skillItemYear="2018" />
        <SkillItem skillItemTitle="Docker" skillItemYear="2018" />
        <SkillItem skillItemTitle="Lando" skillItemYear="2018" />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Hobbies" />
    <SectionInfo>
      <SectionInfoInner>
        <SectionItem sectionItemTitle="Sailing" />
        <SectionItem sectionItemTitle="Scuba Diving" />
        <SectionItem sectionItemTitle="Cycling" />
        <SectionItem sectionItemTitle="Cooking" />
        <SectionItem sectionItemTitle="Woodworking" />
      </SectionInfoInner>
    </SectionInfo>
    <Footer />
  </>
)

export default IndexPage
