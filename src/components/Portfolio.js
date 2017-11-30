import React, { Component } from 'react'
import Items from './PortItem'
import styled from 'styled-components'

const StyledPortfolio = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
`

class Portfolio extends Component {
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

export default Portfolio
