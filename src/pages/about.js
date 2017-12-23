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
    <p>Since 2002, I occasionally designed and built websites for both myself and colleagues; beginning in the fall of 2016 my focus shifted to a more professional and deeper level of web development by learning front end languages, frameworks, techniques and implementations. My current projects include developing sites with React and Gatsby, utilizing CSS in JS with Styled-Components and new design layouts with CSS Grid.</p>
    <p>I have been producing photography and art books; designing, editing and intermittently publishing many since 2007.</p>
    <p>I am a former chef, curator, gallery owner, am currently a private art dealer and exhibiting artist (photography and painting).</p>
    <p>I like to make things.</p>
  </Text>
)

export default About
