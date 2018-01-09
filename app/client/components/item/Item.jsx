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
        <div className="item__img-container">
          <img className="item__img-container__img" src={this.props.item.imgSm}/>
        </div>
        <div className="item__details">
          <div className="item__details__name">
            {this.props.item.name}
          </div>
          <div className="item__details__price-container">
            <div className={`item__details__price-container__price ${this.props.item.sale ? 'item__details__price-container__price--sale' : ''}`}>
              ${this.props.item.price}
            </div>
          </div>
        </div>
        <div className="item__logo-container" style={{ height: this.props.item.logoHeight }}>
          <img className="item__logo-container__logo" src={this.props.item.logo}/>
        </div>
      </div>
    );
  }
};