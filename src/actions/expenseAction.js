export function addExpensesAction(expense) {
    return {
        type: 'ADD_EXPENSE',
        payload: expense,
    };
}

export function deleteExpensesAction(id) {
    return {
        type: 'DELETE_EXPENSE',
        payload: id,
    };
}

export function updatedExpenseAction(id, updatedExpenses) {
    return {
        type: 'UPDATE_EXPENSE',
        payload: { id: id, updatedExpenseData: updatedExpenses},
    };
}