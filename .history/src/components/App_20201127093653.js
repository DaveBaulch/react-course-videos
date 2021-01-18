import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { videos: [] };

  render() {
    return (
      <div>
        <SearcBar />
      </div>
    );
  }
}

export default App;
