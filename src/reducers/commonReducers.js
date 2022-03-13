import { TOGGLE_SEARCHER_MODAL, SET_ERROR } from "../actions/commonActions";

const initialState = {
  showSearchModal: false,
  error: null,
};

function commonReducers(state = initialState, { payload, type }) {
  switch (type) {
    case TOGGLE_SEARCHER_MODAL:
      return {
        ...state,
        showSearchModal: !state.showSearchModal,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
}

export default commonReducers;
