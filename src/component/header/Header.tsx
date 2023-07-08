import {NavLink} from "react-router-dom";
import React, {useEffect} from 'react';
import {store} from "../../store";

import './Header.css';
import {removeAuth, setAuth} from "../../store/action/user";
import {TOKEN} from "../../config/constants";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {

    const {isAuth} = useTypedSelector(state => state.user);

    useEffect(() => {
        if (localStorage.getItem(TOKEN)) {
            store.dispatch(setAuth())
        }
    }, [isAuth]);

    return (
        <div className={'header'}>
            <div className={'nav'}>
                <ul className={'nav-menu-items'}>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/categories'}>Categories</NavLink>
                    </li>
                </ul>
                <ul className={'nav-menu-logining'}>
                    {!isAuth &&
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/login'}>Login</NavLink></li>}
                    {!isAuth && <li className={'nav-item'}><NavLink className={'nav-link'}
                                                                    to={'/registration'}>Registration</NavLink></li>}
                    {isAuth && <li className={'nav-item'} onClick={() => {
                        localStorage.removeItem(TOKEN);
                        store.dispatch(removeAuth())
                    }}>
                        <NavLink className={'nav-link'} to={'/login'}>Exit</NavLink></li>}
                </ul>
            </div>
        </div>
    );
};

export default Header;
