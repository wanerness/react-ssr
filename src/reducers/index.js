function appReducer(state = {num:10}, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                num:state.num+action.num
            }
            break;
    
        default:
            return state
    }
    
}
export default appReducer