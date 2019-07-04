const initialState = {
  open: false
}

const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_OPEN':
      let isOpen = initialState.open;
      return {
        ...state,
        open: !isOpen
      }
    default:
      return state;
  }
}

export default menuReducer;