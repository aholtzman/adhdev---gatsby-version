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
      </div>
    );
  }
}

export default BookItem
