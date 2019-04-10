import React, {Component} from 'react';


class Entry extends Component {

  render() {
    return (
      <div className='entry'>
        <span className='item'>{this.props.word}</span>
        <span className='item-content'>{this.props.phrases}</span>
      </div>);
  }
}
export default Entry;
