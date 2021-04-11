import React from 'react';

const PostOptionsMenuBase = ({postId, postOptionsMenuOpen, hidePostOptionsMenu}) => {
    return (
        <div className="postOptionsMenuBase" style={postOptionsMenuOpen === postId ? {display: 'block'} : {display: 'none'}}  onClick={(e) => hidePostOptionsMenu(e, postId)}></div>
    );
}
 
export default PostOptionsMenuBase;