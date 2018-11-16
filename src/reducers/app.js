import { createReducer } from 'redux-no-reducer-helper';

export default createReducer('app/update', {
    count: 0,
    example: {
        loading: false,
    }
});