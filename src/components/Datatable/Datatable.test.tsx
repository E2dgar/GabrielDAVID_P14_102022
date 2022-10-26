/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Datatable } from './DataTable';

describe('Datatable component', () => {
    render(<Datatable />);

    const datatable = screen.getByTestId('datatable');

    test('must render datatable component', async () => {
        expect(datatable).toBeInTheDocument();
    });
});
