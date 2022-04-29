export type CellData = {
    value: number;
    dateRelease: string;
};

export interface ITableData {
    [key: string]: {
        G: {
            [key: number]: {
                XX: CellData;
                YY: CellData;
                ZZ: CellData;
            };
        };
    };
}
