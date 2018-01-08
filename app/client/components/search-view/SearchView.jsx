const React = require('react');
const _ = require('lodash');
const Stores = require('../../util/Stores');
const Aggregator = require('../../stores/Aggregator');

const SearchBar = require('../search-bar/SearchBar.jsx');
const Item = require('../item/Item.jsx');

import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class SearchView extends React.Component {
  state = {
    searchQuery: '',
    loading: false,
    selectedStores: _.map(Stores),
    items: []
  };

  getItems = () => {
    Aggregator.fetchItems(this.state.selectedStores, this.state.searchQuery).then(res => {
      if (res.searchQuery === this.state.searchQuery) {   // ensure state.items always reflects search query (race condition)
        this.setState({
          items: res.items,
          loading: false
        });
      }
    });
  };

  handleSearch = (e, searchQuery) => {
    this.setState({
      searchQuery,
      loading: true
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
        {
          this.state.loading &&
          <CircularProgress />
        }
        <div className="search-view__item-container">
          {items}
        </div>
      </div>
    );
  }
};