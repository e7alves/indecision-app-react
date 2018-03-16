import React from 'react';

const Action = (props) => (
    <button
        className="big-button"
        onClick={props.handleRandom}
        disabled={!props.showAction}
    >
        What should I do?
    </button>
);

export default Action;