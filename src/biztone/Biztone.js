/* eslint no-shadow: 0, react/no-did-mount-set-state: 0, react/prop-types: 0, import/no-unresolved: 0 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { onHandler } from './action';
import style from './style.css';

class Biztone extends Component {
  constructor(...args) {
    super(...args);
    this.state = { name: 'Lin. JY' };
  }

  componentDidMount() {
    document.title = 'SPA';
  }

  render() {
    const { name } = this.state;
    const { poiId, poiName } = this.props.poi;
    return (
      <div>
        <div>name: {name}</div>
        <h3 className={style.poi}>poiId: {poiId}, poiName: {poiName}</h3>
        <button onClick={() => this.props.onHandler()}>Change</button>
      </div>
    );
  }
}

const { object, func } = PropTypes;
Biztone.propTypes = {
  poi: object,
  onHandler: func,
};
export default connect(state => state, { onHandler })(Biztone);
