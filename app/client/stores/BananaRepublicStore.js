const _ = require('lodash');
const Request = require('../util/Request');

const BananaRepublicStore = {
  fetchItems: (searchQuery) => (
    Request.get('/banana-republic?search=' + searchQuery).then((body) => {
      try {
        // if (body.productCategoryFacetedSearch.autoCorrectedText) {
        //   return [];
        // }
        return _.map((body.productCategoryFacetedSearch.productCategory.childProducts || []), (item) => ({
          name: item.name,
          imgSm: item.quicklookImage.path,
          price: parseFloat(item.price.currentMinPrice),
          sale: parseFloat(item.price.currentMinPrice) !== parseFloat(item.price.regularMinPrice),
          link: `http://bananarepublic.gapcanada.ca/browse/product.do?pid=${item.businessCatalogItemId}`,
          logo: 'img/banana-republic.png',
          logoHeight: '15px',
        }))
      } catch(e) {
        return [];
      }
    })
  )
};
  
module.exports = BananaRepublicStore;