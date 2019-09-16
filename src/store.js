import {createStore} from 'redux'

//INITIAL STATE
const initialState = {
    currentValue: 0
}

//ACTION CONSTS

//REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

//EXPORT THE STORE BY DEFAULT

export default createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )