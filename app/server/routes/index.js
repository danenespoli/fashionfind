const Router = require('express').Router;
const request = require('request');

module.exports = function(app) {
  const router = Router();

  router.get('/banana', (req, res) => {
    const requestUrl = 'http://bananarepublic.gapcanada.ca/resources/productSearch/v1/' + req.query.search;
    request(requestUrl, { json: true }, (err, result, body) => {
      try {
        res.send(JSON.stringify(body));
      } catch(e) {
        res.send(JSON.stringify([{
          name: 'Trouble fetching products from Banana Republic'
        }]));
      }
    });
  });

  return router;
};
