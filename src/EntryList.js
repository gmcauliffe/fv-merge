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
        phrases={ entry.related_phrases[0].phrase }
        pronunciation={ entry['fv-word:pronunciation'] } />
    });
    
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <main className="entries">
      Results
        { entries }
      </main>  
    );
  }
}
export default EntryList;
