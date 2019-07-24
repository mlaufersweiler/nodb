const express = require('express')
const app = express();
const playlistController = require('./controllers/controller')

app.use(express.json());

app.get('/api/Playlist/:id', playlistController.getNewSong);
app.get('/api/NewPlaylist/', playlistController.getNewPlaylist);
app.get('/api/OldPlaylist/:playlistName', playlistController.getOldPlaylist);
app.put('/api/NewPlaylist/', playlistController.updateNewPlaylist);
app.put('/api/OldPlaylist/', playlistController.updateOldPlaylist);
app.delete('/api/newPlaylist', playlistController.deleteSong)


const port = 6140;
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});