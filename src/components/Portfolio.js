import React, { Component } from 'react'
import Items from './PortItem'
import styled from 'styled-components'
import StyledPortfolio from './StyledPortfolio'

class Portfolio extends Component {
  render() {
    return(
      <div><br></br><br></br>
      <h2>I have been the front end developer at Technology Therapy since January 2018 creating business websites, online marketing games and helping to develop a custom proprietary CMS system called Stella.</h2>
      <h3>I have been responsible for conceptualizing and implementing many reusable components that can render varying page sections simply and efficiently and for taking several game ideas from whiteboard to finished products with the flexibility of customizing each build with a simple JSON file. I have also taken on the role of UX/UI advocate for each project I am assigned, advising changes to design and functionally with the end users needs as a guide. Stella is build on a stack based on Vue.js, Apollo, GraphQl and PostGraphile.</h3>
      <h3>Since 2002, I have occasionally designed and built websites for both myself and colleagues on a freelance basis. Beginning in the fall of 2016 my focus shifted to a more professional and deeper level of web development by learning front end languages, frameworks, techniques and implementations. My current freelance projects include developing sites with React, Vue and Gatsby, utilizing CSS in JS with Styled-Components and new design layouts with CSS Grid and GraphQl to tie into the backend.</h3>
      <h3>Below are exaples of freelance and fun projects I have created over the years. Please contact me for links to site I have worked on in a professional capacity.</h3>
      <br></br><br></br>
      <StyledPortfolio>
        {this.props.data.map((data) => {
          return <Items data={data} key={data.index} title={data.title} />
        })}
      </StyledPortfolio>
      </div>
    )
  }
}

export default Portfolio
