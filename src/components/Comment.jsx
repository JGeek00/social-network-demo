import React from 'react';
import Modal from 'react-responsive-modal';

const Comment = ({publishComment, handleWriteComment, commentBody, commentButtonDisabled, closeCommentDialog, commentDialogOpen}) => {
    return (
        <Modal open={commentDialogOpen} onClose={closeCommentDialog}>
            <div className="comment">
                <div className="title">
                    <span>Comment post</span>
                </div>
                <div className="textareaDiv">
                    <textarea className="textareaPublisher" name="body" placeholder="Write a comment..." onInput={handleWriteComment} value={commentBody} autoComplete="off"></textarea>
                    <div className="buttonsDiv">
                        <button onClick={publishComment} className="publishButton" disabled={commentButtonDisabled}>
                            <i className="bi bi-chat-left-text"></i>
                            <span>Comment</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
 
export default Comment;