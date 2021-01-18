import React from 'react';

const VideoItem = ({ video }) => {
  // destructure the prop

  return (
    <div className="item">
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        classNa
      />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
