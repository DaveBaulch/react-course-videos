
import React from 'react';

const VideoDEatils = ({ video, onVideoSelect }) => {
  // destructure the prop

  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>#
      </div>
    </div>
  );
};

export default VideoItem;
