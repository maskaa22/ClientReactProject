import React, {FC} from 'react';
import {TaskListProps} from "../../types/types";
import TaskItem from "./TaskItem";
import './Tasks.css';

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
