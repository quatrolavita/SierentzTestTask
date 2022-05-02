import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';

// routs
import Index from 'pages/Index';
import PopupTable from 'feature/PopupTable/PopupTable';

function ModalSwitcher() {
    const location = useLocation();

    // @ts-ignore
    const background = location.state && location.state.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<Index />}>
                    <Route path="popup" element={<PopupTable />} />
                </Route>
            </Routes>
            <Routes>
                {background && <Route path="/popup" element={<PopupTable />} />}
            </Routes>
        </>
    );
}

export default function Navigation() {
    return (
        <Router>
            <ModalSwitcher />
        </Router>
    );
}
