import React from 'react';
import Modal from 'react-responsive-modal';

const PostModal = ({postModalOpen, closePostModal, postInModal}) => {
    var numComment = 1;

    return (
        <Modal open={postModalOpen} onClose={closePostModal}>
            <div className="postModal">
                <div className="topBar">
                    <span>
                        Post view
                    </span>
                </div>
                <div className="content">
                    {
                        postInModal !== '' ? (
                            <div>
                                <div className="post" key={`postModal-${postInModal.id}`}>
                                    <div className="postTitleDiv">
                                        <span className="postTitle">{postInModal.title}</span>
                                        <div className="datetime">
                                            <span className="date"><i className="bi bi-calendar"></i><span>{postInModal.datetime.getDate()}-{postInModal.datetime.getMonth()+1}-{postInModal.datetime.getFullYear()}</span></span>
                                            <span className="time"><i className="bi bi-clock"></i><span>{postInModal.datetime.getHours()}:{postInModal.datetime.getMinutes()}</span></span>
                                        </div>
                                    </div>
                                    <div className="postBody">
                                        <span>{postInModal.content}</span>
                                    </div>
                                    {/* <div className="bottomElements">
                                        <button className="likes" onClick={addLike} postid={post.id}><i className={postInModal.likes.liked === true ? "bi bi-suit-heart-fill filled" : "bi bi-suit-heart"}></i>{post.likes.numLikes}</button>
                                        <button className="comments" onClick={commentPost} postid={post.id}><i className={post.comments.commented === true ? "bi bi-chat-left-dots-fill filled" : "bi bi-chat-left-dots"}></i>{post.comments.allComments.length}</button>
                                    </div> */}
                                </div>
                                                            
                                {
                                    postInModal.comments.allComments.length > 0 ? (
                                        <div className="commentsDiv">
                                            <div className="commentTitle">
                                            <span >Comments</span>
                                            </div>
                                            <div className="comments">
                                                {
                                                    postInModal.comments.allComments.map(comment => (
                                                        <div className="comment">
                                                            <div className="numComment">
                                                                {`#${numComment++}`}
                                                            </div>
                                                            <div className="commentBody">
                                                                {comment.content}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        <React.Fragment />
                                    )
                                }
                            </div>
                        ) : (
                            <React.Fragment />
                        )
                    }
                </div>
            </div>
        </Modal>
    );
}
 
export default PostModal;