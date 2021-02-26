import React from 'react';
import Modal from 'react-responsive-modal';

const Publisher = ({publishPost, handleWritePost, titleText, bodyText, publishButtonDisabled, closePublishDialog, writeDialogOpen}) => {
    return (
        <Modal open={writeDialogOpen} onClose={closePublishDialog}>
            <div className="publisher">
                <div className="title">
                    <span>Publish something</span>
                </div>
                <div className="textareaDiv">
                    <input type="text" className="title" name="title" onInput={handleWritePost} placeholder="Post title..." value={titleText} autoComplete="off"/>
                    <textarea className="textareaPublisher" name="body" placeholder="Write something..." onInput={handleWritePost} value={bodyText} autoComplete="off"></textarea>
                    <div className="buttonsDiv">
                        <button onClick={closePublishDialog} className="closeButton">
                            <i className="bi bi-x"></i>
                            <span>Close</span>
                        </button>
                        <button onClick={publishPost} className="publishButton" disabled={publishButtonDisabled}>
                            <i className="bi bi-chat-left-text"></i>
                            <span>Publish</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
 
export default Publisher;