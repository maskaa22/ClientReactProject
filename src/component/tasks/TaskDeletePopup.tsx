import React, {FC} from 'react';
import {TaskItemDeleteProps} from "../../types/types";
import ModalWindow from "../../utils/Modal";

const TaskDeletePopup: FC<TaskItemDeleteProps> = ({taskId, categoryId}) => {

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);


    const handleOpenDelete = () => {
        setOpenDeleteModal(true);
    };

    const handleCloseDelete = () => {
        setOpenDeleteModal(false);
    };

    return (
        <>
            <button className={'modal-button'}
                onClick={() => handleOpenDelete()}
            >delete
            </button>
            <ModalWindow open={openDeleteModal} handleClose={handleCloseDelete} createCategoryFlag={false}
                         deleteCategoryFlag={false} categoryId={categoryId} editCategoryFlag={false}
                         categoryName={''} deleteTaskFlag={true} taskId={taskId}/>
        </>
    );
};

export default TaskDeletePopup;
