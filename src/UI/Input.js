import React from 'react';

const Input=(props)=>{
    let component;
    switch(props.inputtype){
        case ("input"):{
            component=<input {...props}></input>;
            break;
        }
        case ("textarea"):{
            component=<textarea {...props}></textarea>;
            break;
        }
        default:{
            component=<input {...props}></input>;
        }
    }
    return component;
}

export default Input;