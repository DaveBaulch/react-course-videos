import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
        params: {
          q: term
        }
      });

      console.log(response.data.items);
    };



    // console.log(term);
    // const response = await unsplash.get('/search/photos', {
    //   params: { query: term }
    // });
    // console.log(response.data.results);
    // console.log(this);
    // this.setState({ videos: response.data.results });

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
