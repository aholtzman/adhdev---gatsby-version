import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  width: 80%;
  margin: auto;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 2px;
`

const About = () => (
  <Text>
    <p>Since 2002, Adam Holtzman occasionally designed and built websites for both himself and colleagues. Recently, his focus shifted to a more professional and deeper level of web development by learning front end languages, techniques and implementations. His current projects include developing sites with React, has been utilizing CSS in JS with Styled-Components and new design layouts with CSS Grid.</p>
    <p>Adam is a former chef, an art dealer and exhibiting artist (photography and painting). He has been known to produce photography and art books; designing, editing and intermittently publishing over fifty books since 2007.</p>
  </Text>
)

export default About
