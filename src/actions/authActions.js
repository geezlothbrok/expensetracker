export function signup (email, password) {
    return async ( dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            const expense = await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    }
}

export function login (email, password) {
    return async (dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            const expensecredential = await firebase.auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
         console.log(error);   
        }
    }
}

export function logout() {
    return async (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      try {
        await firebase.auth().signOut();
      } catch (e) {
        console.log(e);
      }
    };
  }