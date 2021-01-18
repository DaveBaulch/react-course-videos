import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useVideos()

  // useEffect(() => {
  //   onTermSubmit('buildings');
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   });

  //   setVideos(response.data.items);
    setselectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => setselectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
