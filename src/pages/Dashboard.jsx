import AddExpenses from "../component/AddExpenses";
import { Component } from "react";
import ExpensesToMap from "../component/ExpensesToMap";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";



class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expensesData: [],
    }
  }

  addExpenses =(expense) => {
    this.setState({expensesData: [...this.state.expensesData, expense]})
  }

  handleLogout = () => {
    this.props.logout();
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
          <button type='button' onClick={this.props.handleLogout}>Logout</button>

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

const mapDispatchToProps = { logout };
export default connect(null, mapDispatchToProps) (Dashboard);
