import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenseAction';

class EditExpenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemorservice: this.props.expense.itemorservice,
            date: this.props.expense.date,
            expenseamount: this.props.expense.expenseamount,
            category: this.props.expense.category,
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.updatedExpenseAction(this.state);
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

let mapDispatchToProps = {
    editExpense,
};

let mapStateToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpenses);
