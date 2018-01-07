const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

module.exports = class Item extends React.Component {
  openLink = () => {
    window.open(this.props.item.link, '_blank');
  };

  render() {
    return (
      <div className="item" onClick={this.openLink}>
        {this.props.item.name}
      </div>
    );
  }
};