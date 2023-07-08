import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './Tasks.css';
import {getTasks} from "../../services/API";
import TaskList from "./TaskList";
import {TOKEN} from "../../config/constants";

const Tasks: FC = () => {

    const navigate = useNavigate();

    const location = window.location.pathname;
    const locationSplit = location.split('/:');
    const locationSplitOneItem = locationSplit[1].split('/');
    const categoryId = locationSplitOneItem[0];

    const [tasks, setTasks] = useState([]);
    const [nameCategory, setNameCategory] = useState('');

    useEffect(() => {
        if (localStorage.getItem(TOKEN)) {
            getTasks(+categoryId).then(res => {
                setNameCategory(res.nameCategory.name);
                setTasks(res.tasks);
            })
        }
    }, [tasks, categoryId]);

    return (
        <div className={'container'}>
            <div className={'tasks-header'}>
                <h1>{nameCategory}</h1>
                <button className={'create-task'} onClick={() => {
                    navigate(`/categories/:${categoryId}/task`)
                }}>Add task
                </button>
            </div>
            <TaskList tasks={tasks} categoryId={+categoryId}/>
        </div>
    );
};

export default Tasks;
