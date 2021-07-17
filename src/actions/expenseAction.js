export function getAllExpenses() {
    return (dispatch, state, { getFirestore }) => {
      const db = getFirestore();
      db.collection("expenses").onSnapshot((results) => {
          let expenses = [];
          results.forEach((doc) => {
            let expense = doc.data();
            expense.id = doc.id;
            expenses.push(expense);
          });
  
          dispatch({
            type: "ADD_ALL_EXPENSES",
            payload: expenses,
          });
        },
        (err) => {
          console.log(err);
        }
        );
        
    };
  }

  export function addNewExpenses(expense) {
    return async (dispatch, state, { getFirestore }) => {
      const db = getFirestore();
      try {
        await db.collection('expenses').add(expense);
      } catch (err) {
        console.log(err);
      }
    };
  }

  export function deleteExpense(id) {
    return async ( dispatch, state, { getFirestore }) => {
      let db = getFirestore();
      try {
        await db.collection('expenses').doc(id).delete();
      } catch (error) {
        console.log(error);
      }
    }
  }

  export function editExpense(id, upadtedExpense) {
    return async ( dispatch, state, { getFirestore }) => {
      let db = getFirestore();
      try {
        await db.collection('expenses').doc(id).update(upadtedExpense);
      } catch (error) {
        console.log(error);
      }
    }
  }