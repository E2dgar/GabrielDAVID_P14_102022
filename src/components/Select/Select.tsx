import React, { FC } from 'react';

export interface ISelect {
    labelBefore: string;
    lableAfter: string;
    options: Array<any>;
}

export const Select: FC<ISelect> = (props) => {
    return (
        <label>
            {props.labelBefore}

            <select name="table-length">
                {props.options.map((option) => (
                    <option key={`option-${option}`} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {props.lableAfter}
        </label>
    );
};
