import React from 'react';
import { connect } from 'react-redux';

const App = ({ number, plus, minus }) => (
    <div>
        <h2>App {number}</h2>
        <button onClick={() => { plus(10); }}>+10</button>
        <button onClick={() => { minus(10); }}>-10</button>
    </div>
)

const mapStateToProps = state => {
    return {
        number: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        plus: num => {
            dispatch({ type: "PLUS", payload: { num: num } })
        },
        minus: num => {
            dispatch({ type: "MINUS", payload: { num: num } })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


