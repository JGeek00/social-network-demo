import React, { Component } from 'react';

import TopBar from './TopBar';

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
        searchText: ''
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
    
    render() { 
        return (
            <TopBar filteredUsers={this.state.filteredUsers} searchValue={this.state.searchText} onSearch={this.onSearch} onDeleteSearch={this.onDeleteSearch} />
        );
    }
}
 
export default Main;