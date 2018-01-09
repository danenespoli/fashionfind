const _ = require('lodash');
const when = require('when');

const BananaRepublicStore = require('./BananaRepublicStore');
const JCrewStore = require('./JCrewStore');

const stores = {
  BananaRepublic: BananaRepublicStore,
  JCrew: JCrewStore,
};

const Aggregator = {
  fetchItems: (selectedStores, searchQuery) => {
    const deferred = when.defer();
    if (!searchQuery.length) {
      deferred.resolve({
        searchQuery,
        items: []
      });
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
        // const combinedItems = [];
        // while (_.max(_.map(result, (retailer) => (
        //   retailer.length
        // )))) {
        //   const retailersLeft = _.filter(result, (retailer) => (
        //     retailer.length
        //   ));
        //   const num = Math.floor(Math.random() * retailersLeft.length);
        //   combinedItems.push(retailersLeft[num].shift());
        // }
        deferred.resolve({
          searchQuery,
          items: combinedItems
        });
      });
    }
    return deferred.promise;
  }
};

module.exports = Aggregator;