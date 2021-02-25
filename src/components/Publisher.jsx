import React, { Component } from 'react';

const Publisher = ({publishPost, handleWritePost, titleText, bodyText}) => {
    return (
        <div className="publisher">
            <div className="textareaDiv">
                <input type="text" className="title" name="title" onInput={handleWritePost} placeholder="Post title..." value={titleText}/>
                <textarea className="textareaPublisher" name="body" placeholder="Write something..." onInput={handleWritePost} value={bodyText}></textarea>
                <div className="publishButtonDiv">
                    <button onClick={publishPost}>
                        <i className="bi bi-chat-left-text"></i>
                        <span>Publish</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Publisher;