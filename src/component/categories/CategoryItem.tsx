import React, {FC} from 'react';
import {CategoryItemProps} from "../../types/types";
import './Category.css';
import CategoryActions from "./CategoryActions";



const CategoryItem: FC<CategoryItemProps> = ({category, handleOpenDelete, handleOpenEdit}) => {

    const formatted = new Date(category.dateCreated * 1000);

    return (
        <>
            <div className={'category-item'}>
                <div>{category.name}</div>
                <div>{category.id}</div>
                <div>{formatted.toLocaleDateString("uk-UK")}</div>
                <CategoryActions category={category} handleOpenDelete={handleOpenDelete} handleOpenEdit={handleOpenEdit}/>
                <div className={'category-more'}>more</div>
            </div>

        </>
    );
};

export default CategoryItem;
