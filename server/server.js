let path = require('path');
let fs = require('fs');

let chirpPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        chirp: 'hello',
        id: 1
    },
    {
        chirp: 'leftovers',
        id: 2
    },
    {
        chirp: 'playa',
        id: 3
    },
    {
        chirp: 'nevermind',
        id: 4
    },
    {
        chirp: 'breakdown',
        id: 5
    }
];

fs.writeFile(chirpPath, JSON.stringify(chirps), (err) => {
    if(err) console.log(`Error ${err}`);

    console.log('Yep');
})
