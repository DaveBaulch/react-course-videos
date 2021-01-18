import React from 'react';

const VideoDetail = ({ video }) => {

  if (!video) {
    return <div>Loding...</div>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
