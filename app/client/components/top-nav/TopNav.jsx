const React = require('react');
const _ = require('lodash');

const SearchBar = require('../search-bar/SearchBar.jsx');

module.exports = class TopNav extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <div className="top-nav__logo">
          Fashionfind
        </div>
        <div className="top-nav__search">
          <SearchBar
            handleSearch={this.props.handleSearch}
            search={this.props.search}
          />
        </div>
      </div>
    );
  }
};