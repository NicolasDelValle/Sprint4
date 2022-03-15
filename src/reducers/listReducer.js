function itemReducer(state = [], { payload, type }) {
  switch (type) {
    case "ADD_ITEM":
      return [...state, { name: payload.name }];
    default:
      return state;
  }
}

export default itemReducer;
