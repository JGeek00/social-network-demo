import React from 'react';

const Posts = ({posts, openPublishDialog, addLike}) => {
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
                                <div className="post" key={`post-${post.id}`}>
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
                                    <div className="bottomElements">
                                        <button className="likes" onClick={addLike} postid={post.id}><i className={post.likes.liked === true ? "bi bi-suit-heart-fill filled" : "bi bi-suit-heart"}></i>{post.likes.numLikes}</button>
                                        <button className="comments"><i className="bi bi-chat-left-dots"></i>{post.comments.length}</button>
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
        </div>
    );
}
 
export default Posts;