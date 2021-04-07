import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Redirect } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';

import TopBar from './TopBar';
import Publisher from './Publisher';
import Trends from './Trends';
import Posts from './Posts';
import SideMenu from './SideMenu';

import {postActions} from '../actions/postActions';
import {loginActions} from '../actions/loginActions';

const Main = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.post);
    const users = useSelector(state => state.user);
    const trends = useSelector(state => state.trend);
    const loginInfo = useSelector(state => state.login);


    // Pages
    const [selectedPage, setSelectedPage] = useState('home');

    // Users
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Post writing dialog
    const [writeDialogOpen, setWriteDialogOpen] = useState(false);
    const [writingPost, setWritingPost] = useState({
        title: '',
        body: ''
    });
    const [lastId, setLastId] = useState(0);
    const [publishButtonDisabled, setPublishButtonDisabled] = useState(true);

    // Comment
    const [commentButtonDisabled, setCommentButtonDisabled] = useState(true);
    const [commentBody, setCommentBody] = useState('');
    const [selectedPostToComment, setSelectedPostToComment] = useState('');
    const [commentDialogOpen, setCommentDialogOpen] = useState(false);

    // Post modal
    const [postModalOpen, setPostModalOpen] = useState(false);
    const [postInModal, setPostInModal] = useState('');

    // Login
    const [loginStatus, setLoginStatus] = useState(null);

    // Side menu
    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    // Options menu
    const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);

    // Logout
    const [logoutModalStatus, setLogoutModalStatus] = useState(false);


    useEffect(() => {
        checkLogin();

        if (posts.length === 0) {
            dispatch(postActions.fetchPosts())
        }
    }, []);

    const checkLogin = () => {
        if (loginInfo.username !== undefined && loginInfo.password !== undefined) {
            const found =  users.find(user => user.username === loginInfo.username && user.password === loginInfo.password);
            if (found) {
                setLoginStatus(true);
            }
        }
        else {
            const loginData = localStorage.getItem('login');
            if (loginData) {
                const parsed = JSON.parse(loginData);
    
                const found =  users.find(user => user.username === parsed.username && user.password === parsed.password);
                if (found) {
                    setLoginStatus(true);
                }
                else {
                    setLoginStatus(false);
                }
            }
            else {
                setLoginStatus(false);
            }
        }
    }

    const onSearch = (e) => {
        if (e.target.value === '') {
            setSearchText('');
            setFilteredUsers([]);
        }
        else {
            const filtered = users.filter(user => user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()));

            setSearchText(e.target.value);
            setFilteredUsers(filtered)
        }
    }

    const onDeleteSearch = () => {
        setSearchText('');
        setFilteredUsers([]);
    }

    const openPublishDialog = () => {
        setWriteDialogOpen(true);
    };
    
    const closePublishDialog = () => {
        setWriteDialogOpen(false);
        setWritingPost({
            title: '',
            body: ''
        });
    };

    const handleWritePost = (e) => {
        const {name, value} = e.target;
        if (name === 'title') {
            if (value !== '' && writingPost.body !== '') {
                setPublishButtonDisabled(false);
            }
            else {
                setPublishButtonDisabled(true);
            }

            setWritingPost({
                title: value,
                body: writingPost.body
            });
        }
        else if (name === 'body') {
            if (writingPost.title !== '' && value !== '') {
                setPublishButtonDisabled(false);
            }
            else {
                setPublishButtonDisabled(true);
            }

            setWritingPost({
                title: writingPost.title,
                body: value
            });
        }
    }

    const publishPost = () => {
        var newId = lastId;
        newId++;

        const datetime = new Date();

        const newPosts = [...posts, {
            id: newId,
            title: writingPost.title,
            content: writingPost.body,
            datetime: datetime,
            likes: {
                liked: false,
                numLikes: 0
            },
            comments: {
                commented: false,
                allComments: []
            }
        }];

        setLastId(newId);
        setWritingPost({
            title: '',
            body: ''
        });
        setPublishButtonDisabled(true);
        
        dispatch(postActions.createPost(newPosts));

        closePublishDialog();

        toast.success("Post published successfully", {
            autoClose: 3000,
            hideProgressBar: true,
            draggable: true,
            pauseOnHover: false,
            closeOnClick: true,
            closeButton: false
        });
    }

    const addLike = (e) => {
        var postId;
        if (e.target.nodeName === 'I') {
            postId = parseInt(e.target.parentNode.getAttribute('postid'));
        }
        else if (e.target.nodeName === 'BUTTON') {
            postId = parseInt(e.target.getAttribute('postid'));
        }
        
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                if (post.likes.liked === false) {   // Post not liked yet
                    return {
                        id: post.id,
                        title: post.title,
                        content: post.content,
                        datetime: post.datetime,
                        likes: {
                            liked: true,
                            numLikes: ++(post.likes.numLikes)
                        },
                        comments: post.comments
                    };
                }
                else if (post.likes.liked === true) {   // Post liked
                    return {
                        id: post.id,
                        title: post.title,
                        content: post.content,
                        datetime: post.datetime,
                        likes: {
                            liked: false,
                            numLikes: --(post.likes.numLikes)
                        },
                        comments: post.comments
                    };
                }
                else {  // None of the above
                    return post;
                }
            }
            else {  // Not this post
                return post;
            }
        });

        dispatch(postActions.updatePosts(updatedPosts))
    }

    const handleWriteComment = (e) => {
        const {value} = e.target;

        if (value !== '') {
            setCommentButtonDisabled(false);
        }
        else {
            setCommentButtonDisabled(true);
        }

        setCommentBody(value);
    }

    const closeCommentDialog = () => {
        setCommentBody('');
        setSelectedPostToComment('');
        setCommentButtonDisabled(true);
        setCommentDialogOpen(false);
    }

    const commentPost = (e) => {
        var postId;
        if (e.target.nodeName === 'I') {
            postId = parseInt(e.target.parentNode.getAttribute('postid'));
        }
        else if (e.target.nodeName === 'BUTTON') {
            postId = parseInt(e.target.getAttribute('postid'));
        }

        setSelectedPostToComment(postId);
        setCommentDialogOpen(true);
    }

    const publishComment = () => {
        const newPosts = posts.map(post => {
            if (post.id === selectedPostToComment) {
                if (commentBody !== '') {     // Comment not empty
                    const newComment = {
                        content: commentBody
                    }
                    const newCommentsList = [...post.comments.allComments, newComment];

                    return {
                        id: post.id,
                        title: post.title,
                        content: post.content,
                        datetime: post.datetime,
                        likes: post.likes,
                        comments: {
                            commented: true,
                            allComments: newCommentsList
                        }
                    }
                }  
                else {   // Comment empty
                    const newCommentsList = post.comments.allComments.pop();

                    return {
                        id: post.id,
                        title: post.title,
                        content: post.content,
                        datetime: post.datetime,
                        likes: post.likes,
                        comments: {
                            commented: false,
                            allComments: newCommentsList
                        }
                    }
                }
            }
            else {  // Not this post
                return post;
            }
        });

        dispatch(postActions.updatePosts(newPosts));

        closeCommentDialog();

        toast.success("Comment published successfully", {
            autoClose: 3000,
            hideProgressBar: true,
            draggable: true,
            pauseOnHover: false,
            closeOnClick: true,
            closeButton: false
        });
    }

    const openPostModal = (post) => {
        setPostInModal(post);
        setPostModalOpen(true);
    }

    const closePostModal = () => {
        setPostModalOpen(false);
        setPostInModal('');
    }

    const logout = () => {
        dispatch(loginActions.logout());
        setLoginStatus(false);
    }

    const openLogoutModal = () => {
        setLogoutModalStatus(true);
        setOptionsMenuOpen(!optionsMenuOpen);
    }
    
    const closeLogoutModal = () => {
        setLogoutModalStatus(false);
    }

    const openOptionsMenu = () => {
        setOptionsMenuOpen(!optionsMenuOpen);
    }

    const handleMenuOpen = () => {
        setSideMenuOpen(!sideMenuOpen);
    }


    return (
        <React.Fragment>
            {
                loginStatus !== null ? (
                    loginStatus === true ? (
                        <div className="mainAppContainer">
                            <ToastContainer />
                            <SideMenu optionsMenuOpen={optionsMenuOpen} openOptionsMenu={openOptionsMenu} openLogoutModal={openLogoutModal} selectedPage={selectedPage} name={loginInfo.name} sideMenuOpen={sideMenuOpen} handleMenuOpen={handleMenuOpen} />
                            <div className={sideMenuOpen === true ? "mainAppContent" : "mainAppContent sideMenuClosed"}>
                                <TopBar filteredUsers={filteredUsers} searchValue={searchText} onSearch={onSearch} onDeleteSearch={onDeleteSearch}  loggedUser={loginInfo.username} logoutModalStatus={logoutModalStatus} openLogoutModal={openLogoutModal} closeLogoutModal={closeLogoutModal} logout={logout} sideMenuOpen={sideMenuOpen} handleMenuOpen={handleMenuOpen} />
                                <div className="pageBody">
                                    <div className="mainBody">
                                        <Publisher publishPost={publishPost} handleWritePost={handleWritePost} titleText={writingPost.title} bodyText={writingPost.body} publishButtonDisabled={publishButtonDisabled} closePublishDialog={closePublishDialog} writeDialogOpen={writeDialogOpen}/>
                                        <Posts posts={posts} openPublishDialog={openPublishDialog} addLike={addLike} selectedPostToComment={selectedPostToComment} commentBody={commentBody} commentButtonDisabled={commentButtonDisabled} commentDialogOpen={commentDialogOpen} handleWriteComment={handleWriteComment} closeCommentDialog={closeCommentDialog} commentPost={commentPost} publishComment={publishComment} openPostModal={openPostModal} closePostModal={closePostModal} postModalOpen={postModalOpen} postInModal={postInModal} />
                                    </div>
                                    <Trends trends={trends}/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Redirect to="/login" />
                    )
                ) : (
                    <span>Loading...</span>
                )
            }
        </React.Fragment>
    );
}
 
export default Main;