import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import './Tasks.css';
import TaskDeletePopup from "./TaskDeletePopup";
import {TaskItemProps} from "../../types/types";

const TaskItem: FC<TaskItemProps> = ({task, categoryId}) => {

    const navigate = useNavigate();

    const startDate = new Date(task.dateStart).toLocaleDateString();
    const entDate = new Date(task.dateEnd).toLocaleDateString();

    return (
        <div className={'task-item'}>
            <h3>{task.name}</h3>
            <div className={'div-task-item-container'}>
                <div>start date</div>
                <div>{startDate}</div>
            </div>
            <div className={'div-task-item-container'}>
                <div>start date</div>
                <div>{entDate}</div>
            </div>
            <div className={'div-task-item-container'}>
                <TaskDeletePopup taskId={task.id} categoryId={categoryId}/>
                <button className={'modal-button'} onClick={() => {
                    navigate(`/categories/:${categoryId}/task/:${task.id}`)
                }}>edit
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
