const React = require('react');
const _ = require('lodash');
const when = require('when');
const request = require('request');

const Stores = require('../../util/Stores');

module.exports = class App extends React.Component {
  constructor() {
    super();
    this.images = {
      BananaRepublic: {
        path: 'img/banana-republic.png',
        height: '20px'
      },
      Rwco: {
        path: 'img/rwco.png',
        height: '15px'
      },
      JCrew: {
        path: 'img/jcrew.png',
        height: '26.66px'
      }
    };
  }

  render() {
    const stores = _.map(Stores, (store) => (
      <div key={store} onClick={() => {this.props.toggleStore(store)}} className={`sidebar__store-selection__store ${this.props.selectedStores[store] ? 'sidebar__store-selection__store--selected' : ''}`}>
        <div className="sidebar__store-selection__store__logo-container" style={{ height: this.images[store].height }}>
          <img className="sidebar__store-selection__store__logo-container__logo" src={this.images[store].path}/>
        </div>
      </div>
    ));

    return (
      <div className="sidebar">
        <div className="sidebar__store-selection">
          <div className="sidebar__store-selection__header-text">
            Selected stores
          </div>
          {stores}
        </div>
      </div>
    );
  }
};