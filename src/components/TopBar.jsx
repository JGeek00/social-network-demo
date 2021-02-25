import React from 'react';

const TopBar = ({filteredUsers, searchValue, onSearch, onDeleteSearch}) => {
    return (
        <div className="topBar">
            <div className="webIcon">
                <i className="bi bi-person-circle"></i>
            </div>
            <span className="appTitle">Social network demo</span>
            <div className="search">
                <i className="bi bi-search"></i>
                {
                    searchValue.length > 0 ? (
                        <div className="clearButton" onClick={onDeleteSearch}>
                            <i className="bi bi-x"></i>
                        </div>
                    ) : (
                        <React.Fragment />
                    )
                }
                <input type="text" className="searchBox" placeholder="Search..." onInput={onSearch} value={searchValue} />
                {
                    filteredUsers.length === 0 ? (
                        <React.Fragment />
                    ) : (
                        <div className="resultsBox">
                            {
                                filteredUsers.map(user => (
                                    <div className="result" key={`resultUser-${user.id}`}>
                                        <i className="bi bi-person-circle"></i>
                                        <span>{user.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}
 
export default TopBar;