const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const Parser = require('rss-parser');
const parser = new Parser();

const saveItem = async function(item) {
    
                // validate data
                const news = await db.News.findOne({
                    where: {
                        link: item.guid
                    },
                });

                if (!news) {
                    const params = {
                        topicId: 1,
                        link: item.guid,
                        title: item.title,
                        content: item.contentSnippet,
                        time: item.pubDate,
                        status: true
                    };
                
                    await  db.News.create(params);
                }
    return item;
  }

async function getRss(topicId) {
    let URL = '';
    switch(topicId) {
    case '':
        URL = 'http://dtinews.vn//en/rss/020/index.html';
        break
        default:
            URL = 'http://dtinews.vn//en/rss/020/index.html';
            break
    }
    let feed = await parser.parseURL(URL);

    feed.items.forEach(item => {
        saveItem(item);
    });

    return "ok";
}

module.exports = {
    getRss,
};