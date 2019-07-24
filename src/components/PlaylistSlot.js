import React from 'react';

function PlaylistSlot(props){
    return (
        <div className="slot">
            <div className="song-number">{props.songIndex}</div>
            <div className="song-middle-div">
                <div className="song-title">{props.songTitle}</div>
                <div className="song-artist">{props.songArtist}</div>
            </div>
            <div className="song-time">{props.songTime}</div>
        </div>
    );
};

export default PlaylistSlot