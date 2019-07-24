import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import NewPlayList from './components/NewPlaylist';
import OldPlaylist from './components/OldPlaylist';
import AddButton from './components/AddButton';
import DeleteButton from './components/DeleteButton';
import Song from './components/Song';
import PlaylistButton from './components/PlaylistButton'
import PlaylistTitles from './components/PlaylistTitles'


let playlistOne = 'playlistOne'
let playlistTwo = 'playlistTwo'
let playlistThree = 'playlistThree'
let playlistFour = 'playlistFour'


class App extends React.Component {
  constructor(){
    super();

    this.state ={
      newSongsList: [{}],
      oldSongsList: [{}]
    }
  }
  componentDidMount(){
    axios
      .get(`/api/NewPlaylist/`)
      .then(res => {
        this.setState({
          newSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
    axios 
      .get(`/api/OldPlaylist/playlistOne`)
      .then(res => {
        this.setState({
          oldSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
  }
  addSong = (song) => {
    axios 
      .put(`/api/NewPlaylist/`)
      .then(res => {
        this.setState({
          newSongsList: res.data,
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
    if(this.state.newSongsList[0]){
        axios 
          .put(`/api/OldPlaylist/`, song)
          .then(res => {
            this.setState({
              oldSongsList: res.data,
            })
          })
          .catch(err => {
            console.log(`there was an error: ${err}`)
          })
      }
  };
deleteSong = (song) => {
  axios 
    .delete(`/api/NewPlaylist/`, song) 
    .then(res => {
      this.setState({
        newSongsList: res.data,
      })
    })
    .catch(err => {
      console.log(`there was an error ${err}`)
    })
}

  addOldSongsList = (playlistName) => {
    axios 
      .get(`/api/OldPlaylist/${playlistName}`)
      .then(res => {
        this.setState({
          oldSongsList: res.data
        })
      })
      .catch(err => {
        console.log(`there was an error: ${err}`)
      })
  }





  render() {
    return (
      <div className="app">
        <Header />
        <div className="song">
          <Song />
        </div>
        <main className="playlists">
          <NewPlayList newSongsList={this.state.newSongsList} />
          <OldPlaylist oldSongsList={this.state.oldSongsList}/>
        </main>
        <footer className="controls">
          <div className="control-button">
            <AddButton addSong={this.addSong} newSongsList={this.state.newSongsList} />
            <DeleteButton deleteSong={this.deleteSong} />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
