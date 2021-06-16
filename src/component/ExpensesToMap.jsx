import React, { Component } from 'react'
import ExpensesItems from './ExpensesItems'

export default class ExpensesToMap extends Component {
    render() {
        return (
            <div>
                {this.props.expensesData.map((expense)=>{
                    return <ExpensesItems expense={expense} />
                })}
            </div>
        )
    }
}
