const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

const Stores = require('../../util/Stores');
const Aggregator = require('../../stores/Aggregator');

const TopNav = require('../top-nav/TopNav.jsx');
const Sidebar = require('../sidebar/Sidebar.jsx');
const Loader = require('../loader/Loader.jsx');
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
    searchQuery: '',
    loading: false,
    items: []
  }

  toggleStore = (storeToToggle) => {
    this.setState({
      selectedStores: _.mapValues(this.state.selectedStores, (selected, store) => (
        storeToToggle === store ? !selected : selected
      ))
    }, this.getItems);
  }

  handleSearch = (e, searchQuery) => {
    this.setState({
      searchQuery,
      loading: true
    }, this.getItems);
  };

  getItems = () => {
    const selectedStores = _.map(_.pickBy(this.state.selectedStores, (selected) => (
      selected
    )), (selected, store) => (
      store
    ));
    Aggregator.fetchItems(selectedStores, this.state.searchQuery).then(res => {
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
        {
          this.state.loading &&
          <div className="app__loader">
            <Loader
              loading={this.state.loading}
            />
          </div>
        }
        <div className="app__search-view">
          <SearchView
            items={this.state.items}
          />
        </div>
      </div>
    );
  }
};