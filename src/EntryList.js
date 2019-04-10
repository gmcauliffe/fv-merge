import React, {Component} from 'react';
import Entry from './Entry.js';

class EntryList extends Component {
  render() {
    const entries = this.props.entries.map(entry => {
      return <Entry 
        key={ entry.uid }
        word={ entry.word }
        part={ entry.part_of_speech }
        reference={ entry['fv:reference'] }
        pronunciation={ entry['fv-word:pronunciation'] } />
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
