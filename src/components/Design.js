import React, { Component } from 'react'
import Items from './bookItem'
import styled from 'styled-components'
import StyledPortfolio from './StyledPortfolio'

class Design extends Component {
  render() {
    return(
      <div><br></br><br></br>
      <h2>I have been active in producing photography and art books – designing, editing and occasionally publishing many since 2007. In this capacity I have worked with individual artists and galleries to produce limited run projects with a range of roles from fully conceptualizing and producing the finished project to advising and guiding the production to completion.</h2>
      <h3>Below is a list of projects I have worked on over the years. Please feel free to contact me if you have a project idea would would want to discuss.</h3>
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

export default Design
