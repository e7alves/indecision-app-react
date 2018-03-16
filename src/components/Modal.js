import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const Modal = (props) => (
    <ReactModal
        isOpen={!!props.selectedOption}
        contentLabel="selected option"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>What should I do?</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>
            OK
        </button>
    </ReactModal>
);

export default Modal;