import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

class IndecisionApp extends React.Component {
    state = {
        options: ['to do 1', 'to do 2', 'to do 3'],
    }

    handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        window.alert(this.state.options[randomNumber]);
    }

    handleRemoveAll = () => {
        this.setState(() => ({
            options: [],
        }));
    }

    handleDelete = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToDelete)
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState(prevState => ({
            options: prevState.options.concat(option)
        }));
    }

    render = () => {
        return (
            <div>
                <Header title="Indecision App" subtitle="Believe in chance" />
                <Action 
                    handleRandom={this.handleRandom}
                    showAction={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDelete={this.handleDelete}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));