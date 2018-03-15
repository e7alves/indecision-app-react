import React from 'react';

import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDelete={props.handleDelete} 
                    />
                ))
            }
        </div>
    );
}

export default Options;