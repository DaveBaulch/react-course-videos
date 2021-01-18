import React from 'react';

const VideoItem = ({ video }) => {
  // console.log(props.video);

  return (
    <div>{video.snippet.title}</div>)
};

export default VideoItem;
