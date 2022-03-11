function taskReducer(state, action) {
  switch (action.type) {
    case "dec":
      return state - 1;
      break;
    case "inc":
      return state + 1;
      break;
    case "set":
      return (state = action.payload);
      break;

    default:
      return state;
      break;
  }
}

export default taskReducer;
