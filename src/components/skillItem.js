import React, {Component} from "react"
import styled from "@emotion/styled"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide';

function subtract(currentYear, years) {
  return currentYear - years;
}

function percent(max, result) {
  return (result/max)*100;
}

class SkillItem extends Component {

  render() {

    const currentYear = new Date().getFullYear()
    const max = subtract(currentYear, 2012)
    const result = subtract(currentYear, this.props.skillItemYear)
    const percentage = percent(max, result).toString(10).concat('%')

    console.log(percentage)

    const StyledSkillItemContainer = styled.div `
      margin-bottom: 3%;
      width: 75%;
      margin-left: 12.5%;
    `

    const StyledSkillItemTitle = styled.h2 `
      color: #663399;
    `

    const SkillLine = styled.hr `
      background-color: #B5D83C;
      width: ${percentage};
      height: 15px;
      border: none;
      margin: 0;
      padding: 0;

    `
    const SkillLineContainerWords = styled.p `
      margin: 0;
      padding: 0;
      text-align: left;
    `

    return (
      <Fade bottom>
        <StyledSkillItemContainer>
            <StyledSkillItemTitle>{this.props.skillItemTitle}</StyledSkillItemTitle>
            <Slide left>
              <SkillLine />
            </Slide>
            <Slide bottom>
              <SkillLineContainerWords>{result} years</SkillLineContainerWords>
            </Slide>
            
        </StyledSkillItemContainer>
      </Fade>
    )
  }
}

export default SkillItem
