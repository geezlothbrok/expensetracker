import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllExpenses } from '../actions/expenseAction';
import ExpensesItems from './ExpensesItems';


function ExpensesToMap (props) {
       
        return (
            <div>
                {props.expensesData.map((expense)=>{
                    return <ExpensesItems expense={expense} deleteExpenses = {props.deleteExpenses} />
                })}
            </div>
        )
    
}

function mapStateToProps(state) {
    return {
        expensesData: state.expensesData,
  };
}

const mapDispatchToProps = {
    getAllExpenses,
  };

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesToMap);