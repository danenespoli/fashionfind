const _ = require('lodash');
const Request = require('../util/Request');

const JcrewStore = {
  fetchItems: (searchQuery) => (
    Request.get('/jcrew?search=' + searchQuery).then((body) => {
      console.log(body);
      try {
        return _.map((body.productList[0].products || []), (item) => ({
          name: item.productDescription,
          imgSm: '',
          price: parseFloat(item.listPrice.amount).toFixed(2),
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