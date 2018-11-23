import React, { Component } from 'react'
import styled from 'styled-components'
import { Desc, ItemWrap, Title, Role, Url, TextWrap } from './PortStyles'

const BookWrap = styled(TextWrap)`
  background: #e6e6e6;
  border: thin solid black;
  border-radius: 5px;
  margin-bottom: 20px;
  width:100%;
  box-shadow: 5px 10px 20px #888888;
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
        <Role>by {this.props.data.author}</Role>
        <PubDate>
          <Desc>{this.props.data.publisher}</Desc>
          <Desc>{this.props.data.year}</Desc>
        </PubDate>
        <h4>{this.props.data.description}</h4>
        <h4>{this.props.data.spec}</h4>
        <hr></hr>
        <h4>role: {this.props.data.role}</h4>
        { this.props.data.url && <Url href={this.props.data.url} target='_blank'>link</Url> }
      </BookWrap>
    );
  }
}

export default BookItem
