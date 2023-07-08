import React, {useEffect, useState} from 'react';
import './Category.css';
import CategoryList from "./CategoryList";
import ModalWindow from "../../utils/Modal";
import {getCategories} from "../../services/API";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCategories().then(res => {
                setCategories(res)
            })
        }

    }, [categories]);

    const [openCreateModal, setOpenCreateModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);

    const [categoryId, setCategoryId] = useState(0);
    const [categoryName, setCategoryName] = useState('');

    const handleOpenCreate = () => {
        setOpenCreateModal(true);
    };

    const handleCloseCreate = () => {
        setOpenCreateModal(false);
    };
    const handleOpenDelete = (id: number) => {
        setCategoryId(id);
        setOpenDeleteModal(true);
    };

    const handleCloseDelete = () => {
        setOpenDeleteModal(false);
    };
    const handleOpenEdit = (id: number, name: string) => {
        setCategoryId(id);
        setCategoryName(name);
        setOpenEditModal(true);
    };

    const handleCloseEdit = () => {
        setOpenEditModal(false);
    };

    return (
        <div className={'container'}>
            <button className={'create-category'} onClick={() => {
                handleOpenCreate()
            }}>Add category
            </button>
            <CategoryList categories={categories} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit}/>

            <ModalWindow open={openCreateModal} handleClose={handleCloseCreate} createCategoryFlag={true}
                         deleteCategoryFlag={false} categoryId={categoryId} editCategoryFlag={false}
                         categoryName={categoryName} deleteTaskFlag={false} taskId={0}/>
            <ModalWindow open={openDeleteModal} handleClose={handleCloseDelete} createCategoryFlag={false}
                         deleteCategoryFlag={true} categoryId={categoryId} editCategoryFlag={false}
                         categoryName={categoryName} deleteTaskFlag={false} taskId={0}/>
            <ModalWindow open={openEditModal} handleClose={handleCloseEdit} createCategoryFlag={false}
                         deleteCategoryFlag={false} categoryId={categoryId} editCategoryFlag={true}
                         categoryName={categoryName} deleteTaskFlag={false} taskId={0}/>

        </div>
    );
};

export default Categories;
