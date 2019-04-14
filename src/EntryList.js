import React, {Component} from 'react';
import Entry from './Entry.js';

class EntryList extends Component {

  render() {
    const isLoading = this.props.isLoading;

    const entries = this.props.entries.map(entry => {
      return <Entry 
        key={ entry.uid }
        word={ entry.word }
        part={ entry.part_of_speech }
        reference={ entry['fv:reference'] }
        phrases={ entry && entry.related_phrases ? entry.related_phrases.phrase : null }
        pronunciation={ entry['fv-word:pronunciation'] } />
    });
    
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <main className="entries">
      Entries
        { entries }
      </main>  
    );
  }
}
export default EntryList;
