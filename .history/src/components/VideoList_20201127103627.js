import React from 'react';

const VideoList = (props) => {
  console.log(props.images);


  // or - destructuring the image properties
  const images = props.images.map((image) => {
    //return <img src={urls.regular} alt={description} key={id} />;
    return ;
  });

};

export default ImageList;
