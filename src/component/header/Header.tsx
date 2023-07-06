import React, {useEffect} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {store} from "../../store";
import {removeAuth, setAuth} from "../../store/action/user";

const Header = () => {

    const {isAuth} = useTypedSelector(state => state.user);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            store.dispatch(setAuth())
        }

    }, [isAuth]);

    return (
        <div className={'header'}>
            <div className={'nav'}>
                <ul className={'nav-menu-items'}>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/categories'}>Categories</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/task'}>Task</NavLink></li>
                </ul>
                <ul className={'nav-menu-logining'}>
                    {!isAuth&& <li className={'nav-item'}><NavLink className={'nav-link'} to={'/login'}>Login</NavLink></li>}
                    {!isAuth&& <li className={'nav-item'}><NavLink className={'nav-link'} to={'/registration'}>Registration</NavLink></li>}

                    {isAuth && <li className={'nav-item'} onClick={() => {
                        localStorage.removeItem('token');
                        store.dispatch(removeAuth())
                    }
                    }><NavLink className={'nav-link'} to={'/login'}>Exit</NavLink></li>}
                </ul>
            </div>
        </div>
    );
};

export default Header;
