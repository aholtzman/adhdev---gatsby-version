import React, { Component } from 'react'

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <h1>{this.props.data.title}</h1>
        <h2>by {this.props.data.author}</h2>
        <h3>{this.props.data.publisher}</h3>
        <h3>{this.props.data.year}</h3>
        <h3>{this.props.data.role}</h3>
        <a href={this.props.data.url}>link</a>
      </div>
    );
  }
}

export default BookItem
