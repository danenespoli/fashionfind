const React = require('react');
const _ = require('lodash');
const Stores = require('../../util/Stores');
const Aggregator = require('../../stores/Aggregator');

const SearchBar = require('../search-bar/SearchBar.jsx');
const Item = require('../item/Item.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class SearchView extends React.Component {
  state = {
    searchQuery: '',
    loading: false,
    selectedStores: [],
    items: []
  };

  componentWillReceiveProps(props) {
    this.setState({
      selectedStores: props.selectedStores,
      searchQuery: props.searchQuery,
      loading: true
    }, this.getItems);
  }

  getItems = () => {
    Aggregator.fetchItems(this.state.selectedStores, this.state.searchQuery).then(res => {
      if (res.searchQuery === this.state.searchQuery) {   // ensure state.items always reflects search query (race condition)
        window.scrollTo(0, 0);    // scroll up all the way
        this.setState({
          items: res.items,
          loading: false
        });
      }
    });
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
        <div className="search-view__item-container">
          {items}
        </div>
      </div>
    );
  }
};