import React from 'react';
import './PostText.css';

const PostText = props => {
    return (<p className="post-text">{props.text}</p>)
}

export default PostText;