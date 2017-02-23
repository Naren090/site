import * as types from '../constants/actionTypes';
// import initialState from './initialState';

const siteVersions = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_SITEVERSIONS: {
      return action.siteVersions;
    }
    case types.CREATE_SITEVERSIONS: {
      return [
        ...state,
        Object.assign({}, action.siteVersion),
      ];
    }
    case types.UPDATE_SITEVERSIONS: {
      return [
        ...state.filter(siteVersion => siteVersion.id !== action.siteVersion.id),
        Object.assign({}, action.siteVersions)
      ];
    }
    case types.DELETE_SITEVERSIONS: {
      return state.filter(obj => obj.id !== action.siteVersion.id);
    }
    default:
      return state;
  }
};

export default siteVersions;
