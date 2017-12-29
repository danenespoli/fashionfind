const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

const SearchView = require('../search-view/SearchView.jsx');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__search-view">
          <SearchView />
        </div>
      </div>
    );
  }
};