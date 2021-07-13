const initialState = {
    members: [
      { name: 'Jojo Zhang', dragonStatus: true },
      { name: 'Brandon Harris', dragonStatus: false }
    ]
}

export const dragonListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_MEMBER": 
            const member = { name: action.payload, dragonStatus: false };
            return {
                ...state,
                members: [...state.members, member]
            };
        default:
            return state;
    }
}
