const _ = require('lodash');
const Request = require('../util/Request');

const BananaRepublicStore = {
  fetchItems: (searchQuery) => (
    Request.get('/banana?search=' + searchQuery).then((body) => {
      console.log(body);
      try {
        if (body.productCategoryFacetedSearch.autoCorrectedText) {
          return [];
        }
        return _.map((body.productCategoryFacetedSearch.productCategory.childProducts || []), (item) => ({
          name: item.name,
          imgSm: item.quicklookImage.path,
          price: parseFloat(item.price.currentMinPrice).toFixed(2),
          sale: parseFloat(item.price.currentMinPrice).toFixed(2) !== parseFloat(item.price.regularMinPrice).toFixed(2),
          link: `http://bananarepublic.gapcanada.ca/browse/product.do?pid=${item.businessCatalogItemId}`
        }))
      } catch(e) {
        return [];
      }
    })
  )
};
  
module.exports = BananaRepublicStore;