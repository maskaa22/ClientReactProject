import React, {FC} from 'react';

import './Category.css';
import CategoryItem from "./CategoryItem";
import {CategoryListProps} from "../../types/types";

const CategoryList: FC<CategoryListProps> = ({categories, handleOpenDelete, handleOpenEdit}) => {

    return (
        <div className={'category-list'}>
            {
                categories?.map(category =>
                    <CategoryItem key={category.id} category={category} handleOpenDelete={handleOpenDelete}
                                  handleOpenEdit={handleOpenEdit}/>
                )}
        </div>
    );
};

export default CategoryList;
