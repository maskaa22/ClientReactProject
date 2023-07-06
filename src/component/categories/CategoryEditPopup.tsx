import React, {FC} from 'react';
import {CategoryItemEditProps} from "../../types/types";
import './Category.css';

const CategoryEditPopup: FC<CategoryItemEditProps> = ({category, handleOpenEdit}) => {
    return (
        <div className={'category-action-item'}
             onClick={() => handleOpenEdit(category.id, category.name)}>Edit
        </div>
    );
};

export default CategoryEditPopup;
