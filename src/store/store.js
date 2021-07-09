import expenseReducer from '../reducer/expenseReducer';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { getFirebase, reduxReactFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from '../firebase/config';

import thunk from 'redux-thunk';

const reducer = combineReducers ({
    expenseState: expenseReducer, firebaseState: firebaseReducer
});

const store = createStore(expenseReducer, compose (applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
reduxReactFirebase(firebase),
reduxFirestore(firebase)
)
);


export default store;