import React from 'react';

const VideoList = ({vidoes}) => {
  console.log(props.videos);

  return <div>{props.videos.length}</div>;
};

export default VideoList;
