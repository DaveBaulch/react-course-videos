import React from 'react';

const VideoList = ({videos}) => {
  console.log(videos);

  return <div>{videos.length}</div>;
};

export default VideoList;
