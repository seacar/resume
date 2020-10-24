import React from "react"

import SEO from "../components/seo"
import Background from "../components/background"
import BackgroundText from "../components/backgroundText"
import Section from "../components/section"
import Footer from "../components/footer"
import SectionItem from "../components/sectionItem"
import SkillItem from "../components/skillItem"
import ProjectItem from "../components/projectItem"
import HobbyItem from "../components/hobbyItem"

import styled from "@emotion/styled"

import "../components/layout.css"

const HeaderContainer = styled.div `
  width: 100%;
  height: 100vh;
`

const SectionInfo = styled.div `
  width: 100%;
`

const SectionInfoInner = styled.div `
  width: 70%;
  margin-left: 15%;
  text-align: center;
  padding-bottom: 5%;
  display: 
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`

const SectionInfoInnerGrid = styled.div `
  width: 70%;
  margin-left: 15%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  row-gap: 10%;
  padding-bottom: 15%;
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
    display: block;
    row-gap: 10%;
    padding-bottom: 5%;
  }
`

const List = styled.ul `
  text-align: left;
  list-style-type: none;
`

const gtHighlights = 
<List>
  <li><b>Concentration:</b> Structural and Functional Materials (ie Metals, Ceramics, and Alloys)</li>
  <li><b>Certificates:</b> Business and Entrepreneurship</li>
  <li><b>GT Inventure Prize:</b> Semi-finalist 2012, 2014, and 2015</li>
  <li><b>GT Business Plan Competition:</b> Winner 2012</li>
  <li><b>National Engineering Capstone Conference:</b> Georgia Tech Undergraduate Representative at Ohio State University - Columbus, Ohio 2016</li>
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
        <SectionItem sectionItemTitle="Georgia Institute of Technology" sectionItemYears="2016" sectionItemHighlight="BS - Materials Science and Engineering" sectionItemDescription={gtHighlights} />
        <SectionItem sectionItemTitle="University of Pennsylvania - Wharton School of Business" sectionItemYears="2018" sectionItemHighlight="Certificate - Business Analytics" sectionItemDescription={whartonHighlights} />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Experience" />
    <SectionInfo>
      <SectionInfoInner>
        <SectionItem sectionItemTitle="ADK Group" sectionItemYears="September 2019 - August 2020" sectionItemHighlight="Drupal Developer" sectionItemDescription="Here I was able to further to develop my Drupal Backend experience at ADK a world cass digital agency based in Boston.  In this role I have had the opportunity to work on a number of different websites mostly utilizing Drupal 8." />
        <SectionItem sectionItemTitle="3BL Media" sectionItemYears="January 2019 - August 2019" sectionItemHighlight="Lead Devops Engineer" sectionItemDescription="In addition to developer duties I oversaw the integration of technologies used throughout the company to improve overall workflow and performance.  Technologies included Adobe Sign, Acquia Pipelines, AWS (several products), Jive (VoIP), and Salesforce." />
        <SectionItem sectionItemYears="February 2017 - January 2019" sectionItemHighlight="Web Developer" sectionItemDescription="Upon graduation from Georgia Tech I transistioned to 3BL Media as a full time Full-Stack Web Developer working on a number of different web properties owned by 3BL.  I worked in a number of different tech stacks including Drupal 7, Drupal 8, EmberJS, NodeJS, and ReactJS." />
        <SectionItem sectionItemTitle="Georgia Institute of Technology" sectionItemYears="August 2012 - August 2016" sectionItemHighlight="IT Student Assistant" sectionItemDescription="While enrolled at Georgia Tech I worked part time for the Office of International Education as an IT Student Assistant.  In this role I contributed to the development and maintinence of the department website (Drupals 6 and 7) and provided desktop IT support to the office of 35+ full time employees." />
      </SectionInfoInner>
    </SectionInfo>
    <Section sectionTitle="Programming Skills" />
    <SectionInfo>
      <SectionInfoInnerGrid>
        <SkillItem skillItemTitle="Drupal" skillItemYear="2012" skillItemSpace="CMS" />
        <SkillItem skillItemTitle="NodeJS" skillItemYear="2012" skillItemSpace="Backend/API" />
        <SkillItem skillItemTitle="MySQL" skillItemYear="2012" skillItemSpace="Database" />
        <SkillItem skillItemTitle="Git/GitHub" skillItemYear="2013" skillItemSpace="DevOps" />
        <SkillItem skillItemTitle="Python" skillItemYear="2016" skillItemSpace="Backend/API" />
        <SkillItem skillItemTitle="ReactJS" skillItemYear="2017" skillItemSpace="Frontend" />
        <SkillItem skillItemTitle="Acquia" skillItemYear="2017" skillItemSpace="Hosting" />
        <SkillItem skillItemTitle="Atlassian Suite" skillItemYear="2017" skillItemSpace="DevOps" />
        <SkillItem skillItemTitle="GatsbyJS" skillItemYear="2018" skillItemSpace="Frontend" />
        <SkillItem skillItemTitle="Twig" skillItemYear="2018" skillItemSpace="Frontend" />
        <SkillItem skillItemTitle="Pantheon" skillItemYear="2018" skillItemSpace="Hosting" />
        <SkillItem skillItemTitle="AWS" skillItemYear="2018" skillItemSpace="DevOps" />
        <SkillItem skillItemTitle="Docker" skillItemYear="2018" skillItemSpace="DevOps" />
        <SkillItem skillItemTitle="Lando" skillItemYear="2018" skillItemSpace="DevOps" />
        <SkillItem skillItemTitle="Couchbase" skillItemYear="2019" skillItemSpace="Database" />
      </SectionInfoInnerGrid>
    </SectionInfo>
    <Section sectionTitle="Project Examples" />
    <SectionInfo>
      <SectionInfoInnerGrid>
        <ProjectItem projectItemTitle="3BL Media" projectItemLink="https://www.3blmedia.com" projectItemTech="Drupal 7" projectItemImage="/images/3bl.png" />
        <ProjectItem projectItemTitle="Triple Pundit" projectItemLink="https://www.triplepundit.com" projectItemTech="Drupal 8/ReactJS" projectItemImage="/images/3p.png" />
        <ProjectItem projectItemTitle="Ethical Performance" projectItemLink="https://www.ethicalperformance.com" projectItemTech="Drupal 8/EmberJS" projectItemImage="/images/ep.png" />
        <ProjectItem projectItemTitle="Major Decision" projectItemLink="https://majordecision.com" projectItemTech="Drupal 8" projectItemImage="/images/md.png" />
        <ProjectItem projectItemTitle="Harvard Asia Center" projectItemLink="https://asiacenter.harvard.edu/" projectItemTech="Drupal 8" projectItemImage="/images/huac.png" />
        <ProjectItem projectItemTitle="Detroit School Guide" projectItemLink="https://www.detroitschoolsguide.com/" projectItemTech="Drupal 8/ReactJS" projectItemImage="/images/dsg.png" />
      </SectionInfoInnerGrid>
    </SectionInfo>
    <Section sectionTitle="Hobbies" />
    <SectionInfo>
      <SectionInfoInnerGrid>
        <HobbyItem hobbyItemTitle="Sailing" hobbyItemImage="/images/sailing.png" />
        <HobbyItem hobbyItemTitle="Scuba Diving" hobbyItemImage="/images/scuba.png" />
        <HobbyItem hobbyItemTitle="Snowboarding" hobbyItemImage="/images/snowboarding.png" />
        <HobbyItem hobbyItemTitle="Cycling" hobbyItemImage="/images/cycling.png" />
        <HobbyItem hobbyItemTitle="Cooking" hobbyItemImage="/images/cooking.png" />
        <HobbyItem hobbyItemTitle="Woodworking" hobbyItemImage="/images/woodworking.png" />
      </SectionInfoInnerGrid>
    </SectionInfo>
    <Footer />
  </>
)

export default IndexPage
