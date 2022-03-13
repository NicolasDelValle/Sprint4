export const TOGGLE_SEARCHER_MODAL = "TOGGLE_SEARCHER_MODAL";
export const SET_ERROR = "SET_ERROR";

export function toggleSearchModal(dispatch) {
  dispatch({
    type: TOGGLE_SEARCHER_MODAL,
  });
}

export function setError(error, dispatch) {
  dispatch({
    type: SET_ERROR,
    payload: {
      error,
    },
  });
}
