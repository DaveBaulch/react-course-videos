import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { videos: [] };

  render() {
    return (
      <div className="ui con">
        <SearchBar />
      </div>
    );
  }
}

export default App;
