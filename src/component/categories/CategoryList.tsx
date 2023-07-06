import React, {FC} from 'react';
import {ICategory} from "../../types/types";
import CategoryItem from "./CategoryItem";
import './Category.css';

interface CategoryListProps {
    categories: ICategory[],
    handleOpenDelete: any,
    handleOpenEdit: any
}

const CategoryList: FC<CategoryListProps> = ({categories, handleOpenDelete, handleOpenEdit}) => {
    return (
        <div className={'category-list'}>
            {
                categories.map(category =>
                    <CategoryItem key={category.id} category={category} handleOpenDelete={handleOpenDelete}
                                  handleOpenEdit={handleOpenEdit}/>
                ).sort()}
        </div>
    );
};

export default CategoryList;
