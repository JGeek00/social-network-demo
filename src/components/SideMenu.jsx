import React from 'react';

import profilePic from '../assets/profile.png';

const SideMenu = ({optionsMenuOpen, openOptionsMenu, openLogoutModal, selectedPage, name}) => {
    return (
        <div className="sideMenu">
            <div className="optionsMenuBase" style={optionsMenuOpen === true ? {display: 'block'} : {display: 'none'}} onClick={openOptionsMenu}></div>
            <div className="profile">
                <div className="profileContent">
                    <div className="optionsDiv">
                        <button className="optionsBtn" onClick={openOptionsMenu}><i className="bi bi-three-dots-vertical"></i></button>     
                        <div className="optionsMenu" style={optionsMenuOpen === true ? {display: 'flex'} : {display: 'none'}}>
                            <button className="optionsMenuBtn topBtn"><i className="bi bi-gear"></i>Settings</button>
                            <button className="optionsMenuBtn bottomBtn" onClick={openLogoutModal}><i className="bi bi-box-arrow-right"></i>Logout</button>
                        </div>
                    </div>
                    <div className="userInfo">
                        <img src={profilePic} />
                        <span>{name}</span>
                    </div>
                </div>
            </div>
            <div className={selectedPage === 'home' ? 'sideMenuOption selected' : 'sideMenuOption'}>
                <i className="bi bi-house"></i>
                <span>Home</span>
            </div>
            <div className={selectedPage === 'trends' ? 'sideMenuOption selected' : 'sideMenuOption'}>
                <i class="bi bi-graph-up"></i>
                <span>Trends</span>
            </div>
        </div>
    );
}
 
export default SideMenu;