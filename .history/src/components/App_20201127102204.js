import React from 'react';
import SearchBar from './SearchBar';
import

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = (term) => {
    // console.log(term);
    // const response = await unsplash.get('/search/photos', {
    //   params: { query: term }
    // });
    // console.log(response.data.results);
    // console.log(this);
    // this.setState({ videos: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
