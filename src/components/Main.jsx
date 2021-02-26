import React, { Component } from 'react';

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
        writingPost: {
            title: '',
            body: ''
        },
        lastId: 0,
        publishButtonDisabled: true,
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
    }
    
    render() { 
        return (
            <div>
                <TopBar filteredUsers={this.state.filteredUsers} searchValue={this.state.searchText} onSearch={this.onSearch} onDeleteSearch={this.onDeleteSearch} />
                <div className="pageBody">
                    <div className="mainBody">
                        <Publisher publishPost={this.publishPost} handleWritePost={this.handleWritePost} titleText={this.state.writingPost.title} bodyText={this.state.writingPost.body} publishButtonDisabled={this.state.publishButtonDisabled}/>
                        <Posts posts={this.state.posts}/>
                    </div>
                    <Trends />
                </div>
            </div>
        );
    }
}
 
export default Main;