const React = require('react');
const _ = require('lodash');
const when = require('when');

const SearchBar = require('../search-bar/SearchBar.jsx');
const Item = require('../item/Item.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class SearchView extends React.Component {
  state = {
    search: '',
    banana: []
  };

  getBanana = () => {
    const deferred = when.defer();
    if (!this.state.search.length) {
      deferred.resolve();
    } else {
      const request = new XMLHttpRequest();
      request.open('GET', '/banana?search=' + this.state.search);
      request.onload = () => {
        if (request.status === 200) {
          this.setState({
            banana: JSON.parse(request.responseText)
          });
          deferred.resolve();
        }
      };
      request.send();
    }
    return deferred.promise;
  };

  handleSearch = (e, search) => {
    this.setState({
      search
    }, this.getBanana);
  };

  render() {
    const items = _.map(this.state.banana, (item, index) => (
      <Item
        key={index}
        item={item}
      />
    ));

    return (
      <div className="search-view">
        <SearchBar
          handleSearch={this.handleSearch.bind(this)}
          search={this.state.search}
        />
        <div className="search-view__item-container">
          {items}
        </div>
      </div>
    );
  }
};