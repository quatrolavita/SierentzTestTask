import React, { Fragment } from 'react';

// default Data
import DEFAULT_DATA from 'shared/constants/testData';

// types
import { CellData, ITableData } from 'shared/types/ITableData';

// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type rowDataArray = Array<{
    rowName: string;
    value: {
        G: {
            [key: number]: {
                XX: CellData;
                YY: CellData;
                ZZ: CellData;
            };
        };
    };
}>;

type TableComponentProps = {
    handleCellClick: () => void;
};

const createHeaderCells = (
    tableData: ITableData = DEFAULT_DATA
): rowDataArray =>
    Object.entries(tableData).reduce((acc: rowDataArray, [key, value]) => {
        acc.push({ rowName: key, value });
        return acc;
    }, []);

const availableYears = [2017, 2018, 2019];

function TableComponent({ handleCellClick }: TableComponentProps) {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow
                        sx={{
                            th: {
                                borderLeft: '1px solid rgba(224, 224, 224, 1)',
                                borderRight: '1px solid rgba(224, 224, 224, 1)',
                            },
                        }}
                    >
                        <TableCell
                            sx={{
                                borderBottom: 0,
                            }}
                        />
                        <TableCell colSpan={3} align="center">
                            2017
                        </TableCell>
                        <TableCell colSpan={3} align="center">
                            2018
                        </TableCell>
                        <TableCell colSpan={3} align="center">
                            2019
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{
                            th: {
                                borderLeft: '1px solid rgba(224, 224, 224, 1)',
                                borderRight: '1px solid rgba(224, 224, 224, 1)',
                            },
                        }}
                    >
                        <TableCell align="center">Regions</TableCell>
                        {['1', '2', '3'].map((key) => (
                            <Fragment key={key}>
                                <TableCell key={`${key}XX`} align="center">
                                    XX
                                </TableCell>
                                <TableCell key={`${key}YY`} align="center">
                                    YY
                                </TableCell>
                                <TableCell key={`${key}ZZ`} align="center">
                                    ZZ
                                </TableCell>
                            </Fragment>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createHeaderCells().map((row) => (
                        <TableRow
                            sx={{
                                td: {
                                    borderLeft:
                                        '1px solid rgba(224, 224, 224, 1)',
                                    borderRight:
                                        '1px solid rgba(224, 224, 224, 1)',
                                },
                            }}
                            key={row.rowName}
                        >
                            <TableCell key={`${row.rowName}cell`}>
                                {row.rowName}
                            </TableCell>
                            {availableYears.map((year) => (
                                <Fragment key={year}>
                                    <TableCell
                                        key={`${row.rowName}_${year}_XX`}
                                        onClick={handleCellClick}
                                    >
                                        {row?.value?.G[year]?.XX?.value}
                                    </TableCell>
                                    <TableCell
                                        key={`${row.rowName}_${year}_YY`}
                                        onClick={handleCellClick}
                                    >
                                        {row?.value?.G[year]?.YY?.value}
                                    </TableCell>
                                    <TableCell
                                        key={`${row.rowName}_${year}_ZZ`}
                                        onClick={handleCellClick}
                                    >
                                        {row?.value?.G[year]?.ZZ?.value}
                                    </TableCell>
                                </Fragment>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;
