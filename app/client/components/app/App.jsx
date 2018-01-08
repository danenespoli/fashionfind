const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

const TopNav = require('../top-nav/TopNav.jsx');
const Sidebar = require('../sidebar/Sidebar.jsx');
const SearchView = require('../search-view/SearchView.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__top-nav">
          <TopNav />
        </div>
        <div className="app__sidebar">
          <Sidebar />
        </div>
        <div className="app__search-view">
          <SearchView />
        </div>
      </div>
    );
  }
};