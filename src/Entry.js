import React, {Component} from 'react';


class Entry extends Component {

  render() {
    return (
      <div className='entry'>
        <ul>
          <li className='entry-word'>{this.props.word}</li>
          <li className='entry-content'>{this.props.part}</li>
          <li className='entry-content'>{this.props.reference}</li>
          <li className='entry-content'>{this.props.pronunciation}</li>
          <li className='entry-content'>{this.props.phrases}</li>
        </ul>
      </div>);
  }
}
export default Entry;
