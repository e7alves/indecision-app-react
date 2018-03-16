import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const Modal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel="selected option"
        onRequestClose={props.handleClearSelectedOption}
        className="modal"
    >
        <h3 className="modal__title">What should I do?</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>
            Okay
        </button>
    </ReactModal>
);

export default Modal;