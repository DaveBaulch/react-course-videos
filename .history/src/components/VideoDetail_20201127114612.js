import React from 'react';

const VideoDetail = ({ video }) => {
  // destructure the prop

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
