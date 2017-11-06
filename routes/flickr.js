const express = require('express');
const router = express.Router();
const flickrFeedController = require('../controllers/flickr-feed.controller');


router.get('/public-feed', (req, res) => {

  flickrFeedController.getPublicFeed().then((result) => {
    // console.log(result);
    // res.status(200).send(JSON.parse(result));
    // let test = JSON.parse(result);
    console.log(typeof result);
    res.status(200).send(result);
  })
    .catch((err) => {

      if (!err.statusCodde) {
        console.log(err);
        res.status(400).send(err);
        return;
      }

      res.status(err.statusCodde).send(err.message);
    });

});


module.exports = router;
