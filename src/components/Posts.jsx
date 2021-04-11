import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Comment from './Comment';
import PostModal from './PostModal';
import PostOptionsMenu from './PostOptionsMenu';
import RemovePostModal from './RemovePostModal';
import PostOptionsMenuBase from './PostOptionsMenuBase';

import {postActions} from '../actions/postActions';

import {removePostDb} from '../services/posts';

import profilePic from '../assets/profile.png';

const Posts = ({userId, posts, openPublishDialog, addLike, publishComment, handleWriteComment, commentBody, commentButtonDisabled, closeCommentDialog, commentDialogOpen, commentPost, openPostModal, closePostModal, postModalOpen, postInModal}) => {
    const dispatch = useDispatch();

    const [postOptionsMenuOpen, setPostOptionsMenuOpen] = useState(null);
    const [removePostModalOpen, setRemovePostModalOpen] = useState(false);
    const [postIdToRemove, setPostIdToRemove] = useState(null);

    const hidePostOptionsMenu = (e, postId) => {
        e.stopPropagation();

        setPostOptionsMenuOpen(null);
    }

    const removePost = async (postId, confirm = false) => {
        if (!confirm) {
            setPostIdToRemove(postId);
            setRemovePostModalOpen(true);
        }
        else {
            setRemovePostModalOpen(false);
            const response  = await removePostDb(postId);
            if (response.status === 200) {
                dispatch(postActions.removePost(postId));
            }
        }
    }

    const closeRemovePostModal = () => {
        setRemovePostModalOpen(false);
    }

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
                                <div className="post" key={`post-${post._id}`} onClick={() => openPostModal(post)}>
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
                                        <button className="author">
                                            <img src={profilePic} alt=""/>
                                            <span>{post.author.username}</span>
                                        </button>
                                        <div className="rightElements">
                                            <div className="postOptionsBtnDiv">
                                                <button className="postOptions" onClick={() => setPostOptionsMenuOpen(post._id)}><i className="bi bi-three-dots"></i></button>
                                            </div>
                                            <button className="comments" onClick={commentPost} postid={post.id}><i className={post.comments.commented === true ? "bi bi-chat-left-dots-fill filled" : "bi bi-chat-left-dots"}></i>{post.comments.allComments.length}</button>
                                            <button className="likes" onClick={addLike} postid={post._id}><i className={post.likedBy.find(like => `${like._id}` === `${userId}`) ? "bi bi-suit-heart-fill filled" : "bi bi-suit-heart"}></i>{post.likedBy.length}</button>
                                            <PostOptionsMenu postId={post._id} postOptionsMenuOpen={postOptionsMenuOpen} hidePostOptionsMenu={() => setPostOptionsMenuOpen(null)} removePost={removePost} />
                                        </div>
                                    </div>
                                    <PostOptionsMenuBase  postId={post._id} postOptionsMenuOpen={postOptionsMenuOpen} hidePostOptionsMenu={hidePostOptionsMenu}/>
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
            <RemovePostModal removePostModalOpen={removePostModalOpen} closeRemovePostModal={closeRemovePostModal} removePost={removePost} postIdToRemove={postIdToRemove} />
        </div>
    );
}
 
export default Posts;