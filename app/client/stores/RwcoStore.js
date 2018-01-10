const _ = require('lodash');
const Request = require('../util/Request');

const BananaRepublicStore = {
  fetchItems: (searchQuery) => (
    Request.get('/banana-republic?search=' + searchQuery).then((body) => {
      try {
        if (body.productCategoryFacetedSearch.autoCorrectedText) {
          return [];
        }
        return _.map((body.productCategoryFacetedSearch.productCategory.childProducts || []), (item) => ({
          name: 'RW Item',
          imgSm: '',
          price: 0,
          sale: false,
          link: ``,
          logo: '',
          logoHeight: '11.25px',
        }))
      } catch(e) {
        return [];
      }
    })
  )
};
  
module.exports = BananaRepublicStore;