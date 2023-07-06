import React, {FC} from 'react';
import {CategoryItemProps} from "../../types/types";
import './Category.css';
import CategoryEditPopup from "./CategoryEditPopup";
import CategoryDeletePopup from "./CategoryDeletePopup";

const CategoryActions: FC<CategoryItemProps> = ({category, handleOpenDelete, handleOpenEdit}) => {
    return (
        <div className={'category-action'}>action
            <div className={'category-action-container'}>
                <CategoryEditPopup category={category} handleOpenEdit={handleOpenEdit}/>
                <CategoryDeletePopup category={category} handleOpenDelete={handleOpenDelete}/>
            </div>
        </div>
    );
};

export default CategoryActions;
