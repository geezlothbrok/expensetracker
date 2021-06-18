import logo from "./logo.svg";
import "./App.css";
import AddExpenses from "./component/AddExpenses";
import { Component } from "react";
import ExpensesToMap from "./component/ExpensesToMap";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expensesData: [],
    }
  }

  

  addExpenses =(expense) => {
     expense.id = 1000 + Math.random() * 100000;
    this.setState({expensesData: [...this.state.expensesData, expense]})

  }
 
  
  deleteExpenses = (id) =>{
    let expenseInfo = this.state.expensesData.filter((expense) => expense.id !== id);
    this.setState({
      expensesData: expenseInfo
    })
  }

  render(){
  return (
    <div>
      <h1 className="heading">Expense Tracker</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h3 className='expense_head'>Add New Expenses</h3>

            <AddExpenses addExpenses={this.addExpenses}/>
          </div>

          <div className="col-md-8">
            <h3 className='expense_head'>Expenses</h3>

            <ExpensesToMap expensesData={this.state.expensesData} deleteExpenses={this.deleteExpenses}/>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;
