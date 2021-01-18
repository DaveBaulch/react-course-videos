import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <div> {video.snippet.title}</div>
      </div>
    </div>
  ); 
    
};

export default VideoDetail;
