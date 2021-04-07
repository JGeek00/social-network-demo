import React from 'react';
import Modal from 'react-responsive-modal';

const TopBar = ({filteredUsers, searchValue, onSearch, onDeleteSearch, loggedUser, logoutModalStatus, openLogoutModal, closeLogoutModal, logout, handleMenuOpen}) => {
    return (
        <div className="topBar">
            <button className="sideMenuBtn" onClick={handleMenuOpen}><i className="bi bi-list"></i></button>
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
            <Modal classNames={{modal: 'logoutModal'}} open={logoutModalStatus} onClose={closeLogoutModal}>
                <div className="logoutContent"> 
                    <span><i className="bi bi-info-circle"></i>You are going to close your session.</span>
                    <div className="buttons">
                        <button className="cancelLogout" onClick={closeLogoutModal}><i className="bi bi-x-circle"></i>Cancel</button>
                        <button className="confirmLogout" onClick={logout}><i className="bi bi-check"></i>Confirm</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
 
export default TopBar;