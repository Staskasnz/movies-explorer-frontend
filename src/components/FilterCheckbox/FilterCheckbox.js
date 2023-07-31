import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const toggleChecked = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };

    console.log('State:', isChecked);

    return (
        <div className="switcher">
            <span className="switcher__handle">
                <input className="switcher__input" type="checkbox" id="toggleInput" checked={isChecked} onChange={handleChange} />
                <button className="switcher__slider" type="button" onClick={toggleChecked}></button>
            </span>
            <label className="switcher__text" htmlFor="toggleInput">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;