import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearcTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onTermSubmit(defaultSearcTerm);
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };
};

export default useVideos;
