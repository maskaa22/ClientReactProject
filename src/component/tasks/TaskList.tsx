import React, {FC} from 'react';

import './Tasks.css';
import TaskItem from "./TaskItem";
import {TaskListProps} from "../../types/types";

const TaskList: FC<TaskListProps> = ({tasks, categoryId}) => {

    return (
        <div className={'category-list task-list'}>
            {
                tasks?.map(task =>
                    <TaskItem key={task.id} task={task} categoryId={categoryId}/>
                ).reverse()}
        </div>
    );
};

export default TaskList;
