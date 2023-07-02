import React from 'react';
import FormLogining from "../formLogining/FormLogining";
import {Route, Routes} from "react-router-dom";
import './Main.css';
import Categories from "../categories/Categories";

const Main = () => {

    return (
        <main className={'main-body'}>
            <Routes>
                <Route path={'/registration'} element={<FormLogining isLogin={false}/>}/>
                <Route path={'/login'} element={<FormLogining isLogin={true}/>}/>
                <Route path={'/categories'} element={<Categories/>}/>
            </Routes>
        </main>
    );
};

export default Main;
