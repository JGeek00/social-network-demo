import React from 'react';

const PostOptionsMenu = ({postId, postOptionsMenuOpen, hidePostOptionsMenu, removePost}) => {
    return (
        <div className="postOptionsMenuContainer">
            <div className="postOptionsMenu" style={postOptionsMenuOpen === postId ? {display: 'block'} : {display: 'none'}}>
                <button className="topBtn buttBtn deleteBtn" onClick={() => removePost(postId)}><i className="bi bi-trash"></i>Delete</button>
            </div>
        </div>
    );
}
 
export default PostOptionsMenu;