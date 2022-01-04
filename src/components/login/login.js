import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary'
import style from './login.css'
import Input from '../../UI/Input';


class login extends Component{
    state={
        name:{
        elementType:'input',
        elementConfig:{
            placeholder:'name',
            type:'text'
        },value:''},
        password:{
            elementType:'input',
        elementConfig:{
            placeholder:'password',
            type:'password'
        },
        value:'',
        }
        
    }
    render(){

        let inputElement=[];
        for(let ele in this.state){
            inputElement.push({
                id:ele,
                config:this.state[ele]
            });
        }
        console.log(this.props);
        return(
            <Aux>
                <div className={style.container}>
                    <header>login page</header>
                    <form>
                    {inputElement.map((ele)=>{
                        return <Input inputtype={ele.config.elementType} {...ele.config.elementConfig} key={ele.id}>  </Input>
                    })}
                    <button >login</button>
                    </form>
                    </div>
            </Aux>
        )
    }
}

export default login;