import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDelete(props.optionText)
            }}
        >
            Delete
        </button>
    </div>
);

export default Option;