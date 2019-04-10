import React, {Component} from 'react';


class Entry extends Component {

  render() {
    return (
      <div className='entry'>
        <ul>
          <li className='item'>{this.props.word}</li>
          <li className='item-content'>{this.props.part}</li>
          <li className='item-content'>{this.props.reference}</li>
          <li className='item-content'>{this.props.pronunciation}</li>
          <li className='item-content'>{this.props.phrases}</li>
        </ul>
      </div>);
  }
}
export default Entry;
