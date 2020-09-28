import React from "react"

import styled from "@emotion/styled"

const NotificationContainer = styled.div `
   position: absolute;
   top: 0vh;
   right: 0;
   width: 25%;
   padding: 1%;
   margin: 1%;
   z-index: 150;
   text-align: center;
   background-color: #B5D83C;
   color: #000;
   border-radius: 20px;
   @media (max-width: 768px) {
      display: none;
   }
`

const NotificationText = styled.p `
   padding: 0;
   margin: 0;
   font-size: 1em;
   font-weight: 600;
`

const Notification = ()=> (
   <NotificationContainer>
      <NotificationText>Currently looking for 2-3 month contract opportunities in front, back, or full stack development utilizing Drupal or React</NotificationText>
   </NotificationContainer>
  
)

export default Notification
