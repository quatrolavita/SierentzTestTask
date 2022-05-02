import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// components
import TableComponent from 'feature/Table/Table';

function Index() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCellClick = () => {
        navigate('popup', { state: { background: location } });
    };

    return <TableComponent handleCellClick={handleCellClick} />;
}
export default Index;
