import React from 'react';
import Modal from 'react-responsive-modal';

const RemovePostModal = ({removePostModalOpen, closeRemovePostModal, removePost, postIdToRemove}) => {
    return (
        <Modal open={removePostModalOpen} onClose={closeRemovePostModal}>
            <div className="removePostModalContent"> 
                <span><i className="bi bi-exclamation-triangle"></i>Are you sure you want to remove this post?</span>
                <div className="buttons">
                    <button className="cancelRemovePost" onClick={closeRemovePostModal}><i className="bi bi-x-circle"></i>Cancel</button>
                    <button className="confirmRemovePost" onClick={() => removePost(postIdToRemove, true)}><i className="bi bi-check"></i>Confirm</button>
                </div>
            </div>
        </Modal>
    );
}
 
export default RemovePostModal;