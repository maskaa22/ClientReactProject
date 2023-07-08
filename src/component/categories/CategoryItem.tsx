import React, {FC, useEffect, useState} from 'react';
import {CategoryItemProps} from "../../types/types";
import './Category.css';
import CategoryActions from "./CategoryActions";
import {useNavigate} from "react-router-dom";
import {getCountTasks} from "../../services/API";


const CategoryItem: FC<CategoryItemProps> = ({category, handleOpenDelete, handleOpenEdit}) => {

    const formatted = new Date(category.dateCreated * 1000);

    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCountTasks(category.id).then(res => {
                setCount(res)
            })
        }

    }, [count]);


    return (
        <>
            <div className={'category-item'}>
                <div>{category.name}</div>
                <div>{(count < 2) ? `${count} task` : `${count} tasks`}</div>
                <div>{formatted.toLocaleDateString("uk-UK")}</div>
                <CategoryActions category={category} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit}/>
                <div className={'category-more'} onClick={() => navigate(`/categories/:${category.id}/tasks`)}>more
                </div>

            </div>

        </>
    );
};

export default CategoryItem;
