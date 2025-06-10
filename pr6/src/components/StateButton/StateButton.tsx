import React from 'react';

interface StateButtonState {
    isActive: boolean;
}

class StateButton extends React.Component<{}, StateButtonState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    toggleState = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }

    render() {
        return (
            <button 
                onClick={this.toggleState}
                className={`state-button ${this.state.isActive ? 'active' : ''}`}
            >
                {this.state.isActive ? 'Активно' : 'Неактивно'}
            </button>
        );
    }
}

export default StateButton;