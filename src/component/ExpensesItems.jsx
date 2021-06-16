import React, { Component } from 'react'

export default class ExpensesItems extends Component {
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        
                        <div className='col-md-2'><span><h4>Items</h4></span>{ this.props.expense.itemorservice } </div>
                        
                        
                        <div className='col-md-2'><span><h4>Date</h4></span>{ this.props.expense.expensedate } </div>
                        
                        
                        <div className='col-md-2'> <span><h4>Amount</h4></span>GHC { this.props.expense.expenseamount }</div>
                        
                        
                        <div className='col-md-2'><span><h4>Category</h4></span>{this.props.expense.category }</div>
                        

                        <div className='col-md-4'><span><h1></h1></span>
                            <button className='delete' type='button'>Delete</button>
                            <button className='edit' type='button'>Edit</button>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}
