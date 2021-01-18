import React from 'react';

const VideoItem = ({ video }) => {
  // console.log(props.video);

  return (
    <div>
      <img src={ {video.snippet.thumbnails.mediu.url}} />
      {video.snippet.title}   
    </div>
  );
};

export default VideoItem;
