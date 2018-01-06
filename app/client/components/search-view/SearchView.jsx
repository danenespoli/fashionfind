const React = require('react');
const _ = require('lodash');
const Aggregator = require('../../stores/Aggregator');

const SearchBar = require('../search-bar/SearchBar.jsx');
const Item = require('../item/Item.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class SearchView extends React.Component {
  state = {
    searchQuery: '',
    selectedStores: [],
    items: []
  };

  getItems = () => {
    Aggregator.fetchItems(this.state.selectedStores, this.state.searchQuery).then(items => {
      this.setState({
        items
      });
    });
  };

  handleSearch = (e, searchQuery) => {
    this.setState({
      searchQuery
    }, this.getItems);
  };

  render() {
    const items = _.map(this.state.items, (item, index) => (
      <Item
        key={index}
        item={item}
      />
    ));

    return (
      <div className="search-view">
        <SearchBar
          handleSearch={this.handleSearch.bind(this)}
          search={this.state.searchQuery}
        />
        <div className="search-view__item-container">
          {items}
        </div>
      </div>
    );
  }
};