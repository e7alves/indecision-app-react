import React from 'react';

const Action = (props) => {
    return (
        <button
            onClick={props.handleRandom}
            disabled={!props.showAction}
        >
            What should I do?
        </button>
    );
}

export default Action;