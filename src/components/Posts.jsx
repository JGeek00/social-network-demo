import React from 'react';

import Comment from './Comment';
import PostModal from './PostModal';

const Posts = ({posts, openPublishDialog, addLike, publishComment, handleWriteComment, commentBody, commentButtonDisabled, closeCommentDialog, commentDialogOpen, commentPost, openPostModal, closePostModal, postModalOpen, postInModal}) => {
    return (
        <div className="postsSection">
            <div className="head">
                <span className="sectionTitle">Published posts</span>
                <button onClick={openPublishDialog} className="publishDialogButton"><i className="bi bi-chat-left-text"></i>Publish something...</button>
            </div>
            <div className="postsList">
                {
                    posts.length > 0 ? (
                        (
                            posts.map(post => (
                                <div className="post" key={`post-${post.id}`} onClick={() => openPostModal(post)}>
                                    <div className="title">
                                        <span>{post.title}</span>
                                        <div className="datetime">
                                            <span className="date"><i className="bi bi-calendar"></i><span>{post.datetime.getDate()}-{post.datetime.getMonth()+1}-{post.datetime.getFullYear()}</span></span>
                                            <span className="time"><i className="bi bi-clock"></i><span>{post.datetime.getHours()}:{post.datetime.getMinutes()}</span></span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span>{post.content}</span>
                                    </div>
                                    <div className="bottomElements" onClick={(e) => e.stopPropagation()}>
                                        <button className="likes" onClick={addLike} postid={post.id}><i className={post.likes.liked === true ? "bi bi-suit-heart-fill filled" : "bi bi-suit-heart"}></i>{post.likes.numLikes}</button>
                                        <button className="comments" onClick={commentPost} postid={post.id}><i className={post.comments.commented === true ? "bi bi-chat-left-dots-fill filled" : "bi bi-chat-left-dots"}></i>{post.comments.allComments.length}</button>
                                    </div>
                                </div>
                            ))
                        )
                    ) : (
                        <div className="noPosts">
                            <h3>There's no posts available to display here.</h3>
                        </div>
                    )
                }
            </div>
            <Comment publishComment={publishComment} handleWriteComment={handleWriteComment} commentBody={commentBody} commentButtonDisabled={commentButtonDisabled} closeCommentDialog={closeCommentDialog} commentDialogOpen={commentDialogOpen} />
            <PostModal postModalOpen={postModalOpen} closePostModal={closePostModal} postInModal={postInModal} />
        </div>
    );
}
 
export default Posts;