const when = require('when');

const reports = {
  temp: {
    guid: null,
    data: null,
    intervalId: null
  },
  hum: {
    guid: null,
    data: null,
    intervalId: null
  },
  handheld: {
    guid: null,
    data: null,
    intervalId: null
  },
};

const Aggregator = {
  fetchItems: (selectedStores, searchQuery) => {
    const deferred = when.defer();
    if (!searchQuery.length) {
      deferred.resolve();
    } else {
      const request = new XMLHttpRequest();
      request.open('GET', '/banana?search=' + searchQuery);
      request.onload = () => {
        if (request.status === 200) {
          deferred.resolve(JSON.parse(request.responseText));
        }
      };
      request.send();
    }
    return deferred.promise;
  }
};

module.exports = Aggregator;