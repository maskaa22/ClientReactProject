import React, {FC} from 'react';

import './Category.css';
import {CategoryItemDeleteProps} from "../../types/types";

const CategoryDeletePopup: FC<CategoryItemDeleteProps> = ({category, handleOpenDelete}) => {

    return (
        <div className={'category-action-item'}
             onClick={() => handleOpenDelete(category.id)}>Delete
        </div>
    );
};

export default CategoryDeletePopup;
