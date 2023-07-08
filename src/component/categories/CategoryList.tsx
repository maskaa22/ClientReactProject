import React, {FC} from 'react';
import {CategoryListProps} from "../../types/types";
import CategoryItem from "./CategoryItem";
import './Category.css';


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
