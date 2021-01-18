import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // onSearchSubmit = (term) => {
  //   console.log(term);

  //   axios
  //     .get('https://api.unsplash.com/search/photos/', {
  //       params: { query: term },
  //       headers: {
  //         Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log(response.data.results);
  //       console.log(response.data.total);
  //       this.setState({ images: response.data.results });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    console.log(response.data.results);
    console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (

    );
  }
}

export default App;
