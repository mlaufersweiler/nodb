import React from 'react';
import axios from 'axios'
import PlaylistSlot from './PlaylistSlot'

class Song extends React.Component {
    constructor(){
        super();

        this.state = {
            title: '',
            artist: '',
            album: '',
            time: ''
            };
        };

    render() { 
    axios 
        .get(`api/playlist/1`)
        .then(res => {
            this.setState({
                title: res.data.title,
                artist: res.data.artist,
                album: res.data.album,
                time: res.data.time
            })
        })
        .catch(err => {
            console.log(`there was an error: ${err}`)
        })
    let {title, artist, album, time} = this.state;
        return (
            <div className="song">
                <div className="song-text">
                    <div className="song-text-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="song-text-artist">
                        <h2>{artist}</h2>
                    </div>
                    <div className="song-text-time">
                        <h2>{time}</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Song