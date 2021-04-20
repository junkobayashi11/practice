import React from 'react';
import LikeButton from './LikeButton';

const LikeButton = (props) =>{
  return(
    <button>いいね数：{props.count}</button>
  )
};

export default LikeButton;