import React, {FC} from 'react';

import './Category.css';
import {CategoryItemEditProps} from "../../types/types";

const CategoryEditPopup: FC<CategoryItemEditProps> = ({category, handleOpenEdit}) => {

    return (
        <div className={'category-action-item'}
             onClick={() => handleOpenEdit(category.id, category.name)}>Edit
        </div>
    );
};

export default CategoryEditPopup;
