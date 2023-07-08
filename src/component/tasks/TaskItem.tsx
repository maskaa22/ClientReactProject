import React, {FC} from 'react';
import {TaskItemProps} from "../../types/types";
import './Tasks.css';
import TaskDeletePopup from "./TaskDeletePopup";
import {useNavigate} from "react-router-dom";

const TaskItem: FC<TaskItemProps> = ({task, categoryId}) => {

    const startDate = new Date(task.dateStart).toLocaleDateString();
    const entDate = new Date(task.dateEnd).toLocaleDateString();

    const navigate = useNavigate();

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
                    {/*<CategoryActions category={category} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit}/>*/}
                    {/*<div className={'category-more'} onClick={() => navigate(`/categories/:${category.id}/task`)}>more</div>*/}
                    <button className={'modal-button'} onClick={() => {
                        navigate(`/categories/:${categoryId}/task/:${task.id}`)
                    }}>edit</button>
                </div>

            </div>
    );
};

export default TaskItem;
