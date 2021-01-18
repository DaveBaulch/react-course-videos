import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
`
  const videoSrc = `https://www.youtube.com/embed/${ideo.id.videoId};

  return (
    <div>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src="`https://www.youtube.com/embed/${videoId}`"
          frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
