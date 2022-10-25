import { useRef } from '@storybook/addons';
import React, { FC } from 'react';

export interface ISearchProps {
    label: string;
}

export const Search: FC<ISearchProps> = (props) => {
    const inputSearch: React.RefObject<HTMLInputElement> = useRef(null);

    const handleChange = () => {
        console.log('search', inputSearch.current?.value);
    };

    return (
        <label>
            {props.label}

            <input ref={inputSearch} type="search" onChange={handleChange} />
        </label>
    );
};
