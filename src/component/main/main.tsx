import React from 'react';
import FormLogining from "../formLogining/FormLogining";
import {Route, Routes} from "react-router-dom";
import './Main.css';
import Categories from "../categories/Categories";
import Tasks from "../tasks/Tasks";

const Main = () => {

    return (
        <main className={'main-body'}>
            <Routes>
                <Route path={'/'} element={<FormLogining isLogin={false}/>}/>
                <Route path={'/registration'} element={<FormLogining isLogin={false}/>}/>
                <Route path={'/login'} element={<FormLogining isLogin={true}/>}/>
                <Route path={'/categories'} element={<Categories/>}/>
                <Route path={'/tasks'} element={<Tasks/>}/>
            </Routes>
        </main>
    );
};

export default Main;
