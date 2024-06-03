import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const SelectDropdown = (props) => {
    const {
        className,
        optionArr,
        handleOnChange,
        labelTitle
    } = props;
   
    return (
        <div>
            <Autocomplete
                className={className}
                disablePortal
                size='small'
                id="combo-box-demo"
                options={optionArr}
                onChange={handleOnChange}
                sx={{ width: '100%', padding: '0' }}
                renderInput={(params) => <TextField {...params} label={labelTitle ? labelTitle : "Select the type of Service"}/>}
            />
        </div>
    )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]
