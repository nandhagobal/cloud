import React, { Component, Suspense } from 'react';
import Aux from '../../hoc/auxiliary'
import {Link, Route, Switch, Redirect, NavLink} from 'react-router-dom' 
// import Login from '../login/login';
// import signup from '../signup/signup';
import style from './layout.css'

const Login = React.lazy(()=>import('../login/login'))
const Signup=React.lazy(()=> import('../signup/signup'));
class Layout extends Component{
    state={
        current:''
    }
    render(){
        console.log(this.props);
        return(
            
            <Aux>
                <div className={style.container}>
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <NavLink to='/login' activeClassName={style.active} className={style.link}>Login</NavLink>
                            </li>
                        <li><NavLink to='/signup' activeClassName={style.active} className={style.link}>SignUp</NavLink>
                        </li>
                    </ul>
                </nav>
                <div >
                    <Route path='/login' exact  render={()=><Suspense fallback={<div>loading....</div>}><Login></Login></Suspense>}></Route>
                    <Route path='/signup'  render={()=><Suspense fallback={<div >loading....</div>}><Signup></Signup></Suspense>}></Route>
                   
                </div>
                </div>
            </Aux>
        )
    }
}

export default Layout;