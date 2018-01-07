const _ = require('lodash');
const when = require('when');

const BananaRepublicStore = require('./BananaRepublicStore');

const stores = {
  BananaRepublic: BananaRepublicStore,
};

const Aggregator = {
  fetchItems: (selectedStores, searchQuery) => {
    const deferred = when.defer();
    if (!searchQuery.length) {
      deferred.resolve([]);
    } else {
      when.all(
        _.map(selectedStores, (storeName) => {
          if (stores[storeName]) {
            return stores[storeName].fetchItems(searchQuery);
          } else {
            const deferred2 = when.defer();
            deferred2.resolve([]);
            return deferred2.promise;
          }
        })
      ).then((result) => {
        const combinedItems = _.flatten(result);
        console.log(combinedItems);
        deferred.resolve(combinedItems);
      });
    }
    return deferred.promise;
  }
};

module.exports = Aggregator;