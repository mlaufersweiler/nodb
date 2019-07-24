import React from 'react';

class AddButton extends React.Component {
    render(){
        console.log(this.props.newSongsList[0])
        return (
            <button 
                className="top-buttons"
                onClick={() => this.props.addSong(this.props.newSongsList[0])} >
                    &nbsp;&nbsp;Add&nbsp;&nbsp;
                </button>
        )
    };
};

export default AddButton;