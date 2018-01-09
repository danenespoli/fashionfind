const _ = require('lodash');
const Request = require('../util/Request');

const JcrewStore = {
  fetchItems: (searchQuery) => (
    Request.get('/jcrew?search=' + searchQuery).then((body) => {
      console.log(body);
      try {
        return _.map((body.productList[0].products || []), (item) => ({
          name: item.productDescription,
          imgSm: `https://www.jcrew.com/s7-img-facade/${item.productCode}_${item.defaultColorCode}_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=408&hei=408`,
          price: parseFloat(item.listPrice.amount),
          sale: false,
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