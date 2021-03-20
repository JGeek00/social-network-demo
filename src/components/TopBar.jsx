import React from 'react';
import Modal from 'react-responsive-modal';

const TopBar = ({filteredUsers, searchValue, onSearch, onDeleteSearch, loggedUser, logoutModalStatus, openLogoutModal, closeLogoutModal, logout}) => {
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
            <div className="logoutDiv">
                <button className="logoutBtn" onClick={openLogoutModal}>
                    <i class="bi bi-person-fill"></i>
                    {loggedUser}
                </button>
            </div>
            <div className="logoutModal">
                <Modal open={logoutModalStatus} onClose={closeLogoutModal}>
                    <div className="logoutContent"> 
                        <span>You are going to close your session.</span>
                        <div className="buttons">
                            <button className="cancelLogout" onClick={closeLogoutModal}>Cancel</button>
                            <button className="confirmLogout" onClick={logout}>Confirm</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
 
export default TopBar;