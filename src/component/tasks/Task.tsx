import React, {FC, useState} from 'react';
import './Tasks.css';
import {TextField} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createTask, editTask} from "../../services/API";
import {SwalFunction} from "../../utils/SwalFunction";
import {ITaskProps} from "../../types/types";
import {useNavigate} from "react-router-dom";

const Task: FC<ITaskProps> = ({editFlag}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [required, setRequired] = useState(true);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const location = window.location.pathname;
    const locationSplit = location.split('/:');
    const locationSplitOneItem = locationSplit[1].split('/');
    const idCategory = locationSplitOneItem[0];
    const idTask = locationSplit[2];

    return (
        <div className={'container container-position'}>
            <div className={'form-create-task'}>
                <div className={'create-task-container'}>
                    <h2 className={'modal-h2'}>
                        {editFlag ? 'Edit task page' : 'Create task page'}</h2>
                    <label className={'modal-label'}>Name</label>
                    <input className={'modal-input'} value={name} onChange={(e) => {
                        setName(e.target.value);
                        if (e.target.value.length > 0) {
                            setRequired(false);
                        }
                    }}/>
                    <label className={'modal-label'}>Description</label>
                    <div className={'modal-input'}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            minRows={4}
                            value={description}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </div>
                    <div className={'modal-button-container'}>
                        <div className={'task-label-align'}><label className={'modal-label'}>start date</label></div>
                        <DatePicker
                            dateFormat="dd.MM.yyyy"
                            selected={startDate}
                            onChange={(e: any) => setStartDate(e)}
                        />
                    </div>
                    <div className={'modal-button-container'}>
                        <div className={'task-label-align'}><label className={'modal-label'}>end date</label></div>
                        <DatePicker
                            dateFormat="dd.MM.yyyy"
                            selected={endDate}
                            onChange={(e: any) => setEndDate(e)}
                        />
                    </div>
                    <div className={'modal-button-container'}>
                        <button className={'modal-button'}>cancel</button>
                        <button className={'modal-button'} onClick={() => {
                            required ?
                                SwalFunction('Error', 'Field name is empty', 'error', 'OK', true)
                                : !editFlag ? createTask(name, description, startDate, endDate, +idCategory)
                                        .then((res) => {
                                            if (res !== undefined) {
                                                navigate(-1);
                                            }
                                        })
                                    : editTask(name, description, startDate, endDate, +idCategory, +idTask)
                                        .then((res) => {
                                            if (res === 1) {
                                                navigate(-1);
                                            }
                                        })
                        }}>save
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Task;
