import React, { Component } from 'react';

import TopBar from './TopBar';
import Publisher from './Publisher';
import Trends from './Trends';
import Posts from './Posts';

class Main extends Component {
    state = {
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
        posts: [
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
            {
                id: 1,
                title: "Lorem",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum voluptate temporibus dolores blanditiis voluptatem quam amet qui quaerat beatae, iste cum, quidem inventore! Minima sunt delectus laudantium numquam optio.\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla praesentium tempora ea culpa!\nIn nostrum voluptatibus reiciendis earum, labore sapiente eius similique voluptatem ipsam magni neque harum inventore officiis mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis saepe cum modi pariatur debitis ad, veniam distinctio optio quibusdam eum officia dolore nobis eius magni expedita porro cumque id nulla. Et nemo deleniti earum voluptate cumque quaerat assumenda, tempora in asperiores fugit ut nobis quasi quo laborum nostrum mollitia laboriosam consequuntur maiores aut. Nam reprehenderit cum dolorem sed eos id. Quos nostrum ipsum minima suscipit necessitatibus sapiente.\nAutem placeat, nulla possimus quam fugit, aliquam quo tenetur voluptate numquam quis voluptatem, nobis earum illo. Asperiores atque voluptatem necessitatibus pariatur quia quidem.",
            },
        ],
        writingPost: {
            title: '',
            body: ''
        }
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
            this.setState({
                writingPost: {
                    title: value,
                    body: this.state.writingPost.body
                }
            })
        }
        else if (name === 'body') {
            this.setState({
                writingPost: {
                    title: this.state.writingPost.title,
                    body: value
                }
            })
        }
    }

    publishPost = () => {

    }
    
    render() { 
        return (
            <div>
                <TopBar filteredUsers={this.state.filteredUsers} searchValue={this.state.searchText} onSearch={this.onSearch} onDeleteSearch={this.onDeleteSearch} />
                <div className="pageBody">
                    <div className="mainBody">
                        <Publisher publishPost={this.publishPost} handleWritePost={this.handleWritePost} titleText={this.state.writingPost.title} bodyText={this.state.writingPost.body}/>
                        <Posts posts={this.state.posts}/>
                    </div>
                    <Trends />
                </div>
            </div>
        );
    }
}
 
export default Main;