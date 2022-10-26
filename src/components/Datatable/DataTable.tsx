import React, { FC } from 'react';

export interface IDatatableProps {}

export const Datatable: FC<IDatatableProps> = (props) => {
    return <table data-testid="datatable">Une table</table>;
};
