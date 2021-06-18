import expenseReducer from '../reducer/expenseReducer';
import { createStore, compose, applyMiddleware } from 'redux';
import { getFirebase, reduxReactFirebase, } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from '../firebase/config';

import thunk from 'redux-thunk';

const store = createStore(expenseReducer, compose (applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
reduxReactFirebase(firebase),
reduxFirestore(firebase)
)
);


export default store;