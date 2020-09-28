import React from "react"

import styled from "@emotion/styled"

import HeadShake from 'react-reveal/HeadShake';

const NotificationContainer = styled.div `
   position: absolute;
   top: 0vh;
   right: 0;
   width: 25%;
   padding: 1%;
   margin: 1%;
   z-index: 150;
   text-align: center;
   color: #fff;
   @media (max-width: 768px) {
      display: none;
   }
`

const NotificationText = styled.p `
   padding: 0;
   margin: 0;
   font-size: 1em;
   font-weight: 900;
   font-family: rubik;
`

const Notification = ()=> (
<NotificationContainer>
    <HeadShake top delay={3000} druation={3000}>
        <NotificationText>Currently looking for 2-3 month contract opportunities in front, back, or full stack-development utilizing Drupal or React.</NotificationText>
    </HeadShake>
</NotificationContainer>

  
)

export default Notification
