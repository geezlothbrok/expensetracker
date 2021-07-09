import AddExpenses from "../component/AddExpenses";
import { Component } from "react";
import ExpensesToMap from "../component/ExpensesToMap";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expensesData: [],
    }
  }

  addExpenses =(expense) => {
    this.setState({expensesData: [...this.state.expensesData, expense]})
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

            <ExpensesToMap expensesData={this.state.expensesData} />
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default App;
