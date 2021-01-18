import React from 'react';

const VideoItem = ({videos}) => {
  console.log(videos);

  return <div>{videos.length}</div>;
};

export default VideoList;
