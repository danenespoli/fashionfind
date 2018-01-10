const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

const Stores = require('../../util/Stores');

const TopNav = require('../top-nav/TopNav.jsx');
const Sidebar = require('../sidebar/Sidebar.jsx');
const SearchView = require('../search-view/SearchView.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class App extends React.Component {
  componentDidMount() {
    this.setState({
      selectedStores: _.mapValues(Stores, (store) => (
        true
      ))
    });
  }

  state = {
    selectedStores: [],
    searchQuery: ''
  }

  toggleStore = (storeToToggle) => {
    this.setState({
      selectedStores: _.mapValues(this.state.selectedStores, (selected, store) => (
        storeToToggle === store ? !selected : selected
      ))
    });
  }

  handleSearch = (e, searchQuery) => {
    this.setState({
      searchQuery,
      loading: true
    }, this.getItems);
  };

  render() {
    return (
      <div className="app">
        <div className="app__top-nav">
          <TopNav
            handleSearch={this.handleSearch}
            search={this.state.searchQuery}
          />
        </div>
        <div className="app__sidebar">
          <Sidebar
            selectedStores={this.state.selectedStores}
            toggleStore={this.toggleStore}
          />
        </div>
        <div className="app__search-view">
          <SearchView
            searchQuery={this.state.searchQuery}
            selectedStores={_.map(_.pickBy(this.state.selectedStores, (selected) => (
              selected
            )), (selected, store) => (
              store
            ))}
          />
        </div>
      </div>
    );
  }
};