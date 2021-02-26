import React from 'react';

const Posts = ({posts}) => {
    return (
        <div className="posts">
            {
                posts.length > 0 ? (
                    (
                        posts.map(post => (
                            <div className="post" key={`post-${post.id}`}>
                                <div className="title">
                                    <span>{post.title}</span>
                                    <div className="datetime">
                                        <span className="date"><i className="bi bi-calendar"></i><span>{post.datetime.getDate()} - {post.datetime.getMonth()+1} - {post.datetime.getFullYear()}</span></span>
                                        <span className="time"><i className="bi bi-clock"></i><span>{post.datetime.getHours()}:{post.datetime.getMinutes()}</span></span>
                                    </div>
                                </div>
                                <div className="content">
                                    <span>{post.content}</span>
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}
 
export default Posts;