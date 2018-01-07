const when = require('when');

function request(type, requestUrl) {
  const deferred = when.defer();
  const request = new XMLHttpRequest();
  request.open(type, requestUrl);
  request.onload = () => {
    if (request.status === 200) {
      deferred.resolve(JSON.parse(request.responseText));
    }
  };
  request.send();
  return deferred.promise;
}

const Request = {
  get: (requestUrl) => {
    return request('GET', requestUrl);
  },

  post: (requestUrl) => {
    return request('POST', requestUrl);
  },

  put: (requestUrl) => {
    return request('PUT', requestUrl);
  },

  delete: (requestUrl) => {
    return request('DELETE', requestUrl);
  }
}

module.exports = Request;