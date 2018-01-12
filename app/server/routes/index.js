const Router = require('express').Router;
const request = require('request');

module.exports = function(app) {
  const router = Router();

  router.get('/banana-republic', (req, res) => {
    const requestUrl = 'http://bananarepublic.gapcanada.ca/resources/productSearch/v1/' + req.query.search;
    request(requestUrl, { json: true }, (err, result, body) => {
      try {
        res.send(JSON.stringify(body));
      } catch(e) {
        res.send(JSON.stringify({
          productCategoryFacetedSearch: {
            productCategory: {
              childProducts: []
            }
          }
        }));
      }
    });
  });

  router.get('/jcrew', (req, res) => {
    const requestUrl = 'https://www.jcrew.com/data/v1/CA/endeca-search?Nloc=en&Ntrm=' + req.query.search + '&Npge=1&Nrpp=60';
    request(requestUrl, { json: true }, (err, result, body) => {
      try {
        res.send(JSON.stringify(body));
      } catch(e) {
        res.send(JSON.stringify([]));
      }
    });
  });

  return router;
};
