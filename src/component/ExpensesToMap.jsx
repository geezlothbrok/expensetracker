import React, { Component } from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps, {})(ExpensesToMap);