import React from "react";
import './ReactionBar.css';
const ReactionBar = props =>  {
    return (<div className="reaction-bar">
        <hr/>
        <div className="reactions">
            <span className ="reaction">Like</span>
            <span className ="reaction">Comment</span>
            <span className ="reaction">Subscribe</span>
        </div>

    </div>);
}


export default ReactionBar;
