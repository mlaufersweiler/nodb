import React from 'react';
import PlaylistSlot from './PlaylistSlot';

class OldPlaylist extends React.Component {
    render(){
        let mappedSongs = this.props.oldSongsList.map((song, i) => {
            return (
                <PlaylistSlot key={i} songIndex={i + 1} songTitle={song.title} songArtist={song.artist} songTime={song.time} />
            )
        })
        return (
            <div className="right-container">
                <div className="old-playlist">
                    <h1>My Playlist</h1>
                    <div className="table">
                        {mappedSongs}
                    </div>
                </div>
            </div>
        )
    }
}

export default OldPlaylist