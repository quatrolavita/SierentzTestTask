import React, { useState } from 'react';

// components
import TableComponent from 'feature/Table/Table';
import RenderInWindow from '../feature/RenderInWindow/RenderInWindow';
import PopupTable from '../feature/PopupTable/PopupTable';

function Index() {
    const [openPopup, setPopupOpen] = useState<boolean>(false);

    const handleCellClick = () => {
        setPopupOpen(true);
    };
    const handlePopupClose = () => {
        setPopupOpen(false);
    };

    return (
        <>
            <TableComponent handleCellClick={handleCellClick} />
            {openPopup && (
                <RenderInWindow>
                    <PopupTable handlePopupClose={handlePopupClose} />
                </RenderInWindow>
            )}
        </>
    );
}
export default Index;
