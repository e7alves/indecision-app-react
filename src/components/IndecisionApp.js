import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import Modal from './Modal';

class IndecisionApp extends React.Component {
    state = {
        options: ['to do 1', 'to do 2', 'to do 3'],
        selectedOption: undefined,
    }

    handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        this.setState((prevState) => ({
            selectedOption: prevState.options[randomNumber],
        }));
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

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined,
        }));
    }

    render = () => {
        return (
            <div>
                <Header title="Indecision App" subtitle="Believe in chance" />
                <div className="container">
                    <Action 
                        handleRandom={this.handleRandom}
                        showAction={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handleDelete={this.handleDelete}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <Modal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;