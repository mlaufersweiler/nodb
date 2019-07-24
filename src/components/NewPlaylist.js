import React from 'react';
import PlaylistSlot from './PlaylistSlot';

class NewPlaylist extends React.Component{
    render(){
        let mappedSongs = this.props.newSongsList.map((song, i) => {
            return (
                <PlaylistSlot key={i} songIndex={i +1} songTitle={song.title} songArtist={song.artist} songTime={song.time} />
            )
        })
        return (
            <div className="left-container">
                <div className="new-playlist">
                    <h1>Today's Top Hits</h1>
                    <div className="table">
                        {mappedSongs}
                    </div>
                </div>
            </div>
        )
    };
};

export default NewPlaylist;