import React, { Component } from 'react'
import { Image, Desc, ItemWrap, Title, Role, Url, TextWrap } from './PortStyles'

class PortItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <ItemWrap>
          <Image
            src={this.props.data.image}
            alt={this.props.data.title}
          />
          <TextWrap>
          <Title>{this.props.data.title}</Title>
          <hr></hr>
          <h3>{this.props.data.dates}</h3>
          <hr></hr>
          <br></br>
          <Desc>{this.props.data.desc}</Desc>
          <br></br>
          <Role>{this.props.data.role}</Role>
          <br></br>
          <hr></hr>
          <br></br>
          <Role>{this.props.data.code}</Role>
          <br></br>
          <Url href={this.props.data.url} target='_blank'>{this.props.data.url}</Url>
          </TextWrap>
        </ItemWrap>
      </div>
    );
  }
}

export default PortItem
