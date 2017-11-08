const assert = require('chai').assert;
const getPublicFeed = require('../controllers/flickr-feed.controller').getPublicFeed;

describe('Controller', () => {
  it('Flickr Public Feed Should be in Object format', () => {
    return getPublicFeed().then((data) => {
      assert.typeOf(data, 'object');
    });
  });
})
