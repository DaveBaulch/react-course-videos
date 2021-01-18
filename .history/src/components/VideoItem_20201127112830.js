import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect = { onVideoSelect } }) => {
  // destructure the prop

  return (
    <div className="item video-item">
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