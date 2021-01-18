import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment"><h4 className>{video.snippet.title}</div>
      <div className="ui segment">{video.snippet.description}</div>
    </div>
  );
};

export default VideoDetail;
