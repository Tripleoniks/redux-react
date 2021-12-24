const redux = require('redux')
const reduxLogger = require('redux-logger')

const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const createStore = redux.createStore


// define a string const that indicate the type of the action
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM '

// define our action
//implement an action creator (a function that returns an action)

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        
    }
}

// implement the reducers (a reducer accepts state action as argument and returns the next state of the app)
// (previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE: return{
// make a copy of the state object and update
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    } 
} 
const iceCreamReducer = (state = initialIceCreamState , action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
// make a copy of the state object and update
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
        default: return state
    } 
}
// combine reducers 
const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCream: iceCreamReducer
})


// Redux store holding the app state
const store = createStore(rootReducer, applyMiddleware(logger))
// allow access to state 
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();