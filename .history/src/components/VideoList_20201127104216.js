import React from 'react';
import VideoItem from ''

const VideoList = ({videos}) => {
  console.log(videos);

  return <div>{videos.length}</div>;
};

export default VideoList;
