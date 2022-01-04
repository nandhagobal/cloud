import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary'
import style from './signup.css'

class signup extends Component{
    render(){
        console.log(this.props);
        return(
            <Aux>
                <div className={style.container}>
                    <header>signup page</header>
                    <label>name:</label>
                    <input type='text'></input>
                    <label>password:</label>
                    <input type='password'></input>
                    <button type="submit">signup</button>
                </div>
            </Aux>
        )
    }
}

export default signup;