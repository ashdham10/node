let path = require('path');
let fs = require('fs');
let rp = require('request-promise');

let redditPath = path.join(__dirname, './popular-articles.json');

rp('https://www.reddit.com/r/popular.json')
.then(data => {
    let parsedData = JSON.parse(data);

    let articles = [];

    parsedData.data.children.forEach(art => {
        let article = {
            title: art.data.title,
            author: art.data.author,
            url: art.data.url
        }
        articles.push(article);
    })

    fs.writeFile(redditPath, JSON.stringify(articles), (err) => {
        if(err) console.log(`Error ${err}`);

        console.log('Done!');
    })
})
.catch(err => console.log(`No, just no ${err}`));
