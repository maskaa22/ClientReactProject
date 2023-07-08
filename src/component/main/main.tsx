import React from 'react';
import FormLogining from "../formLogining/FormLogining";
import {Navigate, Route, Routes} from "react-router-dom";
import './Main.css';
import Categories from "../categories/Categories";
import Tasks from "../tasks/Tasks";
import Task from "../tasks/Task";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Main = () => {
    const {isAuth} = useTypedSelector(state => state.user);



    return (
        <main>
            <Routes>
                <Route path={'/'} element={isAuth ? <Navigate to={'/categories'}/> : <FormLogining isLogin={false}/>}/>
                <Route path={'/registration'} element={<FormLogining isLogin={false}/>}/>
                <Route path={'/login'} element={<FormLogining isLogin={true}/>}/>
                <Route path={'/categories'} element={<Categories/>} />

                <Route path={'/categories/:id/task'} element={<Task editFlag={false}/>}/>
                <Route path={'/categories/:id/task/:id'} element={<Task editFlag={true}/>}/>
                <Route path={'/categories/:id/tasks'} element={<Tasks/>}/>
            </Routes>
        </main>
    );
};

export default Main;
