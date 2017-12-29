const React = require('react');
const _ = require('lodash');

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

module.exports = class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <TextField
          hintText="Search..."
          onChange={this.props.handleSearch}
          fullWidth={true}
          value={this.props.search}
          style={{
            fontFamily: 'Arapey'
          }}
        />
      </div>
    );
  }
};