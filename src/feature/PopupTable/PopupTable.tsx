import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// styles
import styles from './PopupTable.module.css';

const initialData = [
    {
        value: 4,
        date: '20.02.2022',
        user: 'Petro',
        comment: 'any',
        id: Math.random(),
    },
    {
        value: 5,
        date: '21.02.2022',
        user: 'Roman',
        comment: '',
        id: Math.random(),
    },
    {
        value: 6,
        date: '22.02.2022',
        user: 'Anna',
        comment: '',
        id: Math.random(),
    },
];

const getCurrentDate = () => {
    const currDate = new Date();
    const currentDateISO = currDate.toISOString().slice(0, 10);

    return {
        tableFormat: `${currentDateISO.slice(8, 10)}.${currentDateISO.slice(
            5,
            7
        )}.${currentDateISO.slice(0, 4)}`,
        inputFormat: currentDateISO,
    };
};

function PopupTable() {
    const [data, setData] = useState(initialData);
    const [valueInputValue, setValueInput] = useState(0);
    const [userInputValue, setUserInput] = useState('Default User');
    const [commentInputValue, setCommentInput] = useState('');

    const navigate = useNavigate();

    const onValueFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(Number(e.target.value));
    };

    const onCommentFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentInput(e.target.value);
    };

    const onUserFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserInput(e.target.value);
    };

    const onBack = () => {
        navigate(-1);
    };

    const onSubmit = () => {
        setData([
            ...data,
            {
                value: valueInputValue,
                date: getCurrentDate().tableFormat,
                user: userInputValue,
                comment: commentInputValue,
                id: Math.random(),
            },
        ]);
    };

    return (
        <div className={styles.popupWrapper}>
            <div className={styles.popup}>
                <TableContainer sx={{ minWidth: 800 }} component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Value</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>User</TableCell>
                                <TableCell>Comment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.value}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell>{row.comment}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>
                                    <label htmlFor="value">
                                        <input
                                            name="value"
                                            type="number"
                                            value={valueInputValue}
                                            onChange={onValueFieldChange}
                                        />
                                    </label>
                                </TableCell>
                                <TableCell>
                                    <label htmlFor="date">
                                        <input
                                            name="date"
                                            type="string"
                                            value={getCurrentDate().inputFormat}
                                            disabled
                                        />
                                    </label>
                                </TableCell>
                                <TableCell>
                                    <label htmlFor="user">
                                        <select
                                            name="user"
                                            onChange={onUserFieldChange}
                                            value={userInputValue}
                                        >
                                            <option value="John">John</option>
                                            <option value="Mark">Mark</option>
                                            <option value="Elton">Elton</option>
                                        </select>
                                    </label>
                                </TableCell>
                                <TableCell>
                                    <label htmlFor="comment">
                                        <input
                                            name="comment"
                                            type="text"
                                            onChange={onCommentFieldChange}
                                            value={commentInputValue}
                                        />
                                    </label>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="buttonsWrapper">
                    <Button
                        type="button"
                        variant="contained"
                        color="success"
                        onClick={onSubmit}
                    >
                        add
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="error"
                        onClick={onBack}
                    >
                        back
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PopupTable;
