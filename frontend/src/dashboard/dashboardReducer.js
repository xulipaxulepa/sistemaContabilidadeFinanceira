const INITIAL_State = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_State, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}