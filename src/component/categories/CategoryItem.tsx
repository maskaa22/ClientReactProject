import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './Category.css';
import CategoryActions from "./CategoryActions";
import {CategoryItemProps} from "../../types/types";
import {getCountTasks} from "../../services/API";
import {TOKEN} from "../../config/constants";

const CategoryItem: FC<CategoryItemProps> = ({category, handleOpenDelete, handleOpenEdit}) => {

    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (localStorage.getItem(TOKEN)) {
            getCountTasks(category.id).then(res => {
                setCount(res);
            })
        }
    }, [count, category.id]);

    const formatted = new Date(category.dateCreated * 1000);

    return (
        <>
            <div className={'category-item'}>
                <div>{category.name}</div>
                <div>{(count < 2) ? `${count} task` : `${count} tasks`}</div>
                <div>{formatted.toLocaleDateString("uk-UK")}</div>
                <CategoryActions category={category} handleOpenDelete={handleOpenDelete}
                                 handleOpenEdit={handleOpenEdit}/>
                <div className={'category-more'} onClick={() => navigate(`/categories/:${category.id}/tasks`)}>more
                </div>

            </div>

        </>
    );
};

export default CategoryItem;
