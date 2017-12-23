import React, { Component } from 'react'
import styled from 'styled-components'
import { Desc, ItemWrap, Title, Role, Url, TextWrap } from './PortStyles'

const BookWrap = styled(TextWrap)`
  background-color: rgba(140, 140, 150, .1);
  border: thin solid black;
  margin-bottom: 10px;
`

const PubDate = styled.div`
  display: flex;
  justify-content: center;
`

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <BookWrap>
        <Title>{this.props.data.title}</Title>
        <hr></hr>
        <Role>by {this.props.data.author}</Role>
        <PubDate>
          <Desc>{this.props.data.publisher}</Desc>
          <Desc>{this.props.data.year}</Desc>
        </PubDate>
        <h4>role: {this.props.data.role}</h4>
        { this.props.data.url && <Url href={this.props.data.url} target='_blank'>link</Url> }
      </BookWrap>
    );
  }
}

export default BookItem
