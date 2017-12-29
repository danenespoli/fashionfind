const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

module.exports = class Item extends React.Component {
  openBananaLink = (itemId) => {
    window.open(`http://bananarepublic.gapcanada.ca/browse/product.do?pid=${itemId}`, '_blank');
  };

  render() {
    return (
      <div className="item" onClick={() => {this.openBananaLink(this.props.item.businessCatalogItemId)}}>
        {this.props.item.name}
      </div>
    );
  }
};