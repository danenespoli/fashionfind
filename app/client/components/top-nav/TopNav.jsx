const React = require('react');
const _ = require('lodash');

const SearchBar = require('../search-bar/SearchBar.jsx');

import RaisedButton from 'material-ui/RaisedButton';

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
        <div className="top-nav__sign-up">
          <div className="top-nav__sign-up__button">
            <RaisedButton
              label="Log in"
              labelStyle={{
                textTransform: 'none'
              }}
            />
          </div>
          <div className="top-nav__sign-up__button">
            <RaisedButton
              label="Sign up"
              primary={true}
              labelStyle={{
                textTransform: 'none'
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};