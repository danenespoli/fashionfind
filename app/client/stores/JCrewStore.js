const _ = require('lodash');
const Request = require('../util/Request');

const JcrewStore = {
  fetchItems: (searchQuery) => (
    Request.get('/jcrew?search=' + searchQuery).then((body) => {
      try {
        return _.map((body.productList[0].products || []), (item) => ({
          name: item.productDescription,
          imgSm: `https://www.jcrew.com/s7-img-facade/${item.baseProductCode ? item.baseProductCode : item.productCode}_${item.defaultColorCode}?fmt=jpeg&resMode=sharp`,
          price: parseFloat(item.now ? item.now.amount : item.listPrice.amount),
          sale: item.now,
          link: `https://jcrew.com${item.url}`,
          logo: 'img/jcrew.png',
          logoHeight: '20px',
        }))
      } catch(e) {
        return [];
      }
    })
  )
};
  
module.exports = JcrewStore;