import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TopBar from './TopBar';
import Publisher from './Publisher';
import Trends from './Trends';
import Posts from './Posts';

class Main extends Component {
    state = {
        // Users
        users: [
            {
                id: 1,
                name: "Pepe",
            },
            {
                id: 2,
                name: "Jose",
            },
            {
                id: 3,
                name: "Luis",
            },
            {
                id: 4,
                name: "Alba",
            },
            {
                id: 5,
                name: "Lucía",
            },
            {
                id: 6,
                name: "Eva",
            },
        ],
        filteredUsers: [],
        searchText: '',

        // Posts
        posts: [],
        writeDialogOpen: false,
        writingPost: {
            title: '',
            body: ''
        },
        lastId: 0,
        publishButtonDisabled: true,

        // Trends
        trends: [
            {
                id: 1,
                name: "Football"
            },
            {
                id: 2,
                name: "Computers"
            },
            {
                id: 3,
                name: "Politics"
            },
            {
                id: 4,
                name: "Music"
            },
            {
                id: 5,
                name: "Science"
            },
        ]
    }

    onSearch = (e) => {
        if (e.target.value === '') {
            this.setState({
                searchText: e.target.value,
                filteredUsers: []
            });
        }
        else {
            const filtered = this.state.users.filter(user => user.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()));
            
            this.setState({
                searchText: e.target.value,
                filteredUsers: filtered
            });
        }
    }

    onDeleteSearch = () => {
        this.setState({
            searchText: '',
            filteredUsers: []
        });
    }

    openPublishDialog = () => {
        this.setState({ 
            writeDialogOpen: true
        });
    };
    
    closePublishDialog = () => {
        this.setState({ 
            writeDialogOpen: false ,
            writingPost: {
                title: '',
                body: ''
            }
        });
    };

    handleWritePost = (e) => {
        const {name, value} = e.target;
        if (name === 'title') {
            if (value !== '' && this.state.writingPost.body !== '') {
                this.setState({
                    publishButtonDisabled: false
                });
            }
            else {
                this.setState({
                    publishButtonDisabled: true
                });
            }

            this.setState({
                writingPost: {
                    title: value,
                    body: this.state.writingPost.body
                }
            })
        }
        else if (name === 'body') {
            if (this.state.writingPost.title !== '' && value !== '') {
                this.setState({
                    publishButtonDisabled: false
                });
            }
            else {
                this.setState({
                    publishButtonDisabled: true
                });
            }

            this.setState({
                writingPost: {
                    title: this.state.writingPost.title,
                    body: value
                }
            })
        }

    }

    publishPost = () => {
        var newId = this.state.lastId;
        newId++;

        const datetime = new Date();

        const newPosts = [...this.state.posts, {
            id: newId,
            title: this.state.writingPost.title,
            content: this.state.writingPost.body,
            datetime: datetime
        }];

        this.setState({
            posts: newPosts,
            lastId: newId,
            writingPost: {
                title: '',
                body: ''
            },
            publishButtonDisabled: true
        });

        this.closePublishDialog();

        toast.success("Post published successfully");
    }
    
    render() { 
        return (
            <div>
                <ToastContainer />
                <TopBar filteredUsers={this.state.filteredUsers} searchValue={this.state.searchText} onSearch={this.onSearch} onDeleteSearch={this.onDeleteSearch} />
                <div className="pageBody">
                    <div className="mainBody">
                        <Publisher publishPost={this.publishPost} handleWritePost={this.handleWritePost} titleText={this.state.writingPost.title} bodyText={this.state.writingPost.body} publishButtonDisabled={this.state.publishButtonDisabled} closePublishDialog={this.closePublishDialog} writeDialogOpen={this.state.writeDialogOpen}/>
                        <Posts posts={this.state.posts} openPublishDialog={this.openPublishDialog}/>
                    </div>
                    <Trends trends={this.state.trends}/>
                </div>
            </div>
        );
    }
}
 
export default Main;