let path = require('path');
let fs = require('fs');
let rp = require('request-promise');
let shannon = {
    encoding: 'binary'
};

rp('https://www.reddit.com/r/popular.json')
.then(data => {
    let parsedData = JSON.parse(data);

    parsedData.data.children.forEach(art => {
           if(path.extname(art.data.url)){
               let ext = path.extname(art.data.url);
               let idPath = path.join(__dirname, `./downloads/${art.data.id}${ext}`);
               
               rp(art.data.url, shannon)
               .then(data =>{
              
                   fs.writeFile(idPath, data, shannon, (err) => {
                       if(err) console.log(`Error ${err}`);
                    
                       console.log('done');
                   })
               })
           };
    })
})
