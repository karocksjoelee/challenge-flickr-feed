const cm = require('../utility/common-module');
const https = require('https');
const publicFeedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

exports.getPublicFeed = function() {

  return new Promise((resolve, reject) => {

    let req = https.get(publicFeedUrl, (response) => {

      let data ='';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {

        if (response.statusCode !== 200 ) {
          cm.remoteErrHelper(data);
          reject({
            statusCode: response.statusCode,
            message: data
          });
          return;
        }

        // Flickr public feed returns JSONP format .
        let jsonFlickrFeed = new Function('jsonFlickrFeed', data);
        jsonFlickrFeed(function(data){
          cm.logSuc(`[REMOTE-API] ${response.statusCode} GET Public Feeds`);
          // Parse data.item.tags into array of string .
          data.items.forEach((item) => {
            item.tags = item.tags.split(' ');
            // Chenk if data.items.tags is an empty string.
            if (item.tags.length === 1 && item.tags[0] === '') {
              item.tags = [];
            }
          });
          resolve(data);
          // ## TODO : parse data.item.description to clean string . ( Without HTML elements )
        });

      });
    });

  });

}
