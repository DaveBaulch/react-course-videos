
import React from 'react';

const VideoDetail = ({ video, onVideoSelect }) => {
  // destructure the prop

  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>

    </div>
  );
};

export default VideoDetail;
