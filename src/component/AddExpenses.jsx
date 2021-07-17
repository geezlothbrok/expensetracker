import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addNewExpenses} from '../actions/expenseAction';


class AddExpenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemorservice: "",
            date: "",
            expenseamount: "",
            category: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let expenseId = 10000 + Math.random() * 1000000;
        let expense = {...this.state, id: expenseId};
        
        this.props.addExpensesAction(expense);

    }
    render() {
        return (
            <div>
                <form>
                    <label>Item or Service</label>
                    <br></br>
                    <input type="text" name="itemorservice" placeholder="Enter your Prefered Items or Services here" onChange={this.handleOnChange} value={this.state.itemorservice}></input>
                    <br></br><br></br>

                    <label>Date</label>
                    <br></br>
                    <input type="date" name="expensedate" onChange={this.handleOnChange} value={this.state.date}></input>
                    <br></br><br></br>

                    <label>Amount</label>
                    <br></br>
                    <input type="number" name="expenseamount" onChange={this.handleOnChange} value={this.state.expenseamount}></input>
                    <br></br><br></br>

                    <label>Category</label>
                    <br></br>
                    <select name="category" onChange={this.handleOnChange} value={this.state.category}>
                        <option value="" disabled>Select</option>
                        <option value="food and drinks">Food and Drinks</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="transportation">transportation</option>
                        <option value="house and rent">House and Rent</option>
                        <option value="miscellaneous">Miscellaneous</option>

                    </select>
                    <br></br><br></br>

                    <button id='blue' type="button" onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addNewExpenses })(AddExpenses);
