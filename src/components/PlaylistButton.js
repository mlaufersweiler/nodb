import React from 'react';

class PlaylistButton extends React.Component {
    render(){
        return (
            <button 
                className="playlist-buttons"
                onClick={() => this.props.addOldSongsList(this.props.playlistTitle)} >
                    {this.props.playlistTitle}
                </button>
        )
    };
};

export default PlaylistButton;