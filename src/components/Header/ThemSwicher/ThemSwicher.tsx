import {ChangeEvent, useState} from "react";

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';



const ThemSwicher = () => {
    let saveLocal =JSON.parse(localStorage.getItem('theme')) || false
    const [checking, setChecking] = useState(saveLocal);

    if (!checking) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecking(event.target.checked);
        localStorage.setItem('theme', JSON.stringify(event.target.checked))
        console.log(event)
    };
    return (
        <FormControlLabel
            control={<Switch
                checked={checking}
                onChange={handleChange}
                color="default"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label=""
            labelPlacement="end"
        />
    );
};

export {ThemSwicher};
