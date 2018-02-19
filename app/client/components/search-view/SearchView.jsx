const React = require('react');
const _ = require('lodash');

const Stores = require('../../util/Stores');

const SearchBar = require('../search-bar/SearchBar.jsx');
const Item = require('../item/Item.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class SearchView extends React.Component {
  state = {
    items: []
  };

  componentWillReceiveProps(props) {
    this.setState({
      items: props.items
    });
  }

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