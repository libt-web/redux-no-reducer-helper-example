import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux-no-reducer-helper';
import * as actions from './actions/app';

import './App.css';

class App extends Component {
    render() {
        const { count, example } = this.props.store;
        const { addCount, getCountFromServer, resetCount, resetCountAndLoadServer } = this.props.actions;
        return (
            <div style={{ padding: 20 }}>
                <p>Count:{example.loading ? 'loading...' : count}</p>
                <button onClick={addCount}>add 1</button>
                <button onClick={getCountFromServer}>get count from server</button>
                <button onClick={resetCount}>reset count</button>
                <button onClick={resetCountAndLoadServer}>reset count and load from server</button>
            </div>
        );
    }
}

export default connect(
    state => ({ store: state.app }),
    dispatch => ({ actions: bindActionCreators(actions, dispatch, 'app/update') })
)(App);
