const initialState = { expensesData: [] };

export default function (state= initialState, action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            let newExpense = [...state.expensesData, action.payload];
            return{expensesData: newExpense};


        case 'DELETE_EXPENSE':
            var id= action.payload;
            let expensesAfterDelete = state.expensesData.filter((expense)=> expense.id !==id);
            return { expensesData: expensesAfterDelete};

        
        case 'UPDATE_EXPENSE':
            var id= action.payload.id;
            let updatedExpenseData = action.payload.updatedExpenseData;
            let expensAfterUpdate = state.expensesData.map((expense) => {
                if ( expense.id === id) {
                    return updatedExpenseData;
                }
                return expense;
            });
            return { expensesData: expensAfterUpdate };
        default:
            return state;
    }
}