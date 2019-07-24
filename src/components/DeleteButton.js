import React from 'react';

class DeleteButton extends React.Component{
    render(){
        return (
            <button 
                className="top-buttons"
                onClick={() => this.props.deleteSong()} >
                    Delete
                </button>
        )
    };
};

export default DeleteButton;