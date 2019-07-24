let id = 1;
let newPlaylist = [
    {
        id: id++,
        title: "Imagine",
        artist: 'John Lennon',
        album: 'Imagine',
        time: '3:08'
    },
    {
        id: id++,
        title: "Let it Be",
        artist: 'The Beatles',
        album: 'Let it be',
        time: "4:25"
    },
    {
        id: id++,
        title: "Mirrors",
        artist: 'JT',
        album: '/',
        time: '3:17'
    },
    {
        id: id++,
        title: "Tear In My Heart",
        artist: 'Twenty One Pilots',
        album: '/',
        time: '3:17'
    },
    {
        id: id++,
        title: "Phoenix",
        artist: 'ASAP Rocky',
        album: '/',
        time: "4:14"
    },
    {
        id: id++,
        title: "Fly Away With Me",
        artist: 'Tom Walker',
        album: '/',
        time: "4:00"
    },
    {
        id: id++,
        title: "Paradise",
        artist: 'Coldplay',
        album: '/',
        time: "4:35"
    },
    {
        id: id++,
        title: "Bank Account",
        artist: '21 Savage',
        album: '/',
        time: "3:52"
    },
    {
        id: id++,
        title: "Drops of Jupiter",
        artist: 'Train',
        album: '/',
        time: "4:21"
    },
    {
        id: id++,
        title: "Beach Baby",
        artist: 'Bon Iver',
        album: '/',
        time: "2:40"
    },
    {
        id: id++,
        title: "Loving is Easy",
        artist: 'Rex Orange Country',
        album: '/',
        time: "3:50"
    },
    
    {
        id: id++,
        title: "Dang!",
        artist: 'Mac Miller',
        album: '/',
        time: "5:27"
    },
    {
        id: id++,
        title: "AntiSocial",
        artist: 'Ed Sheeran, Travis Scott',
        album: '/',
        time: "3:01"
    },
    {
        id: id++,
        title: "Pyscho",
        artist: 'Post Malone',
        album: '/',
        time: "4:01"
    },
    {
        id: id++,
        title: "Back To Back",
        artist: 'Drale',
        album: '/',
        time: "3:00"
    },
    {
        id: id++,
        title: "Pyscho",
        artist: 'Post Malone',
        album: '/',
        time: "4:01"
    },
    {
        id: id++,
        title: "Pyscho",
        artist: 'Post Malone',
        album: '/',
        time: "4:01"
    },
    {
        id: id++,
        title: "All My Friends",
        artist: 'Snakehips',
        album: '/',
        time: "4:21"
    },
    {
        id: id++,
        title: "Gangsta Gangsta",
        artist: 'NWA',
        album: '/',
        time: "6:02"
    },
    {
        id: id++,
        title: "Ultra Light Bean",
        artist: 'Kanye West',
        album: '/',
        time: "4:01"
    },
    {
        id: id++,
        title: "Loving You Easy",
        artist: 'Zac Brown Band',
        album: '/',
        time: "3:00"
    },
    {
        id: id++,
        title: "Taxi Cab",
        artist: 'Twenty One Pilots',
        album: '/',
        time: "4:01"
    },
    {
        id: id++,
        title: "Angels",
        artist: 'Chance the Rapper',
        album: '/',
        time: "3:45"
    },
    
];
let playlistOne = [];
let playlistTwo = [
    {
        id: 1,
        title: 'Example song one',
        artist: 'Example artist one',
        album: 'Example ablum one',
        time: '3:01'
    },
    {
        id: 2,
        title: 'Example song one',
        artist: 'Example artist one',
        album: 'Example ablum one',
        time: '3:01'
    },
    {
        id: 3,
        title: 'Example song one',
        artist: 'Example artist one',
        album: 'Example ablum one',
        time: '3:01'
    },
]
let playlistThree = [
    {
        id: 1,
        title: 'Example song two',
        artist: 'Example artist two',
        album: 'Example ablum two',
        time: '3:01'
    },
    {
        id: 2,
        title: 'Example song two',
        artist: 'Example artist two',
        album: 'Example ablum two',
        time: '3:01'
    },
    {
        id: 3,
        title: 'Example song two',
        artist: 'Example artist two',
        album: 'Example ablum two',
        time: '3:01'
    },
];
let playlistFour = [
    {
        id: 1,
        title: 'Example song three',
        artist: 'Example artist three',
        album: 'Example ablum three',
        time: '3:01'
    },
    {
        id: 2,
        title: 'Example song three',
        artist: 'Example artist three',
        album: 'Example ablum three',
        time: '3:01'
    },
    {
        id: 3,
        title: 'Example song three',
        artist: 'Example artist three',
        album: 'Example ablum three',
        time: '3:01'
    },
];
let playlists = {
    playlistOne,
    playlistTwo,
    playlistThree,
    playlistFour
}

module.exports = {
    getNewSong: (req, res) => {
        let { id } = req.params
        res.send(newPlaylist[0])
    },
    getNewPlaylist: (req, res) => {
        res.send(newPlaylist)
    },
    getOldPlaylist: (req, res) => {
        let { playlistName } = req.params;
        res.send(playlists[playlistName])
    },
    updateNewPlaylist: (req, res) => {
        newPlaylist.shift();
        res.send(newPlaylist);
    },
    updateOldPlaylist: (req, res) => {
        let { id, title, artist, album, time } = req.body 

        let songToAdd = {
            id,
            title,
            artist,
            album,
            time
        }
        playlistOne.push(songToAdd)
        res.send(playlistOne);
    },
    deleteSong: (req, res) => {
        newPlaylist.shift();
        res.send(newPlaylist)
    },
};