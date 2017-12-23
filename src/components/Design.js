import React, { Component } from 'react'
import Items from './bookItem'
import styled from 'styled-components'
import StyledPortfolio from './StyledPortfolio'

class Design extends Component {
  render() {
    return(
      <StyledPortfolio>
        {this.props.data.map((data) => {
          return <Items data={data} key={data.id} title={data.title} />
        })}
      </StyledPortfolio>
    )
  }
}

export default Design
