import React, {Component} from 'react';
import Entry from './Entry.js';

class EntryList extends Component {
  render() {
    const entries = this.props.entries.map(entry => {
      return <Entry 
        word={ entry.word }
        phrases={ entry.phrases } />
    })
    
    return (
      <main className="entries">
      Entries
        { entries }
      </main>  
    );
  }
}
export default EntryList;
