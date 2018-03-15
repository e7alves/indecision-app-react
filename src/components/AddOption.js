import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined,
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const error = this.props.handleAddOption(e.target.elements.option.value);
        this.setState(() => ({
            error,
        }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render = () => {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    };
}

export default AddOption;