import React, {FC, useState} from 'react';
import {Modal} from "@material-ui/core";
import './Modal.css';
import {createCategory, deleteCategory, deleteTask, editCategory} from "../services/API";

interface ModalProps {
    open: boolean,
    handleClose: any,
    createCategoryFlag: boolean,
    deleteCategoryFlag: boolean,
    deleteTaskFlag: boolean,
    categoryId: number,
    taskId: number,
    editCategoryFlag: boolean,
    categoryName: string
}

const ModalWindow: FC<ModalProps> = ({
                                         open,
                                         handleClose,
                                         createCategoryFlag,
                                         deleteCategoryFlag,
                                         deleteTaskFlag,
                                         categoryId,
                                         taskId,
                                         editCategoryFlag,
                                         categoryName,
                                     }) => {

    const [name, setName] = useState('');

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={'modal-form'}>
                <div className={'modal-create-category'}>
                    <h2 className={'modal-h2'}>
                        {createCategoryFlag && 'Create new category'}
                        {deleteCategoryFlag && 'Do you want delete this category?'}
                        {deleteTaskFlag && 'Do you want delete this task?'}
                        {editCategoryFlag && `Edit ${categoryName} category`}
                    </h2>
                    {(createCategoryFlag || editCategoryFlag) && <div>
                        <label className={'modal-label'}>Name</label>
                        <input value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} className={'modal-input'} placeholder={'write name'}/>
                    </div>}
                    <div className={'modal-button-container'}>
                        <button className={'modal-button'} onClick={handleClose}>
                            {(createCategoryFlag || editCategoryFlag) && 'cancel'}
                            {(deleteCategoryFlag || deleteTaskFlag) && 'no'}
                        </button>
                        <button className={'modal-button'} onClick={() => {
                            createCategoryFlag && createCategory(name, handleClose);
                            deleteCategoryFlag && deleteCategory(categoryId, handleClose);
                            deleteTaskFlag && deleteTask(categoryId, handleClose, taskId);
                            editCategoryFlag && editCategory(name, categoryId, handleClose);

                        }}>
                            {(createCategoryFlag || editCategoryFlag) && 'save'}
                            {(deleteCategoryFlag || deleteTaskFlag) && 'yes'}
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ModalWindow;
