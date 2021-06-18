import React, { Component } from 'react';
import EditExpenses from './EditExpenses';
import { Modal } from 'react-bootstrap';

export default class ExpensesItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
    }

    handleDelete = () => {
        this.props.deleteExpenses(this.props.expense.id);
    }

    closeModal = () => {
        this.setState({ show: false })
    }

    showModal = () => {
        this.setState({ show: true })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-2'><span><h4>Items</h4></span>{this.props.expense.itemorservice} </div>


                        <div className='col-md-2'><span><h4>Date</h4></span>{this.props.expense.expensedate} </div>


                        <div className='col-md-2'> <span><h4>Amount</h4></span>GHC {this.props.expense.expenseamount}</div>


                        <div className='col-md-2'><span><h4>Category</h4></span>{this.props.expense.category}</div>


                        <div className='col-md-4'><span><h1></h1></span>
                            <button className='delete' type='button' onClick={() => {
                                this.props.deleteExpensesAction(this.props.expense.id)
                            }}>Delete</button>
                            <button className='edit' type='button' onClick={this.showModal}>Edit</button>
                        </div>


                    </div>
                </div>

                <div>
                    <Modal show={this.state.show} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Expense</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditExpenses expense={this.props.expense} closeModal={this.closeModal} />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }
}
