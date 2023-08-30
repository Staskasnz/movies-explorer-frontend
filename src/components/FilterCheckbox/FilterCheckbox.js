import './FilterCheckbox.css';

function FilterCheckbox(props) {

    return (
        <div className="switcher">
            <span className="switcher__handle">
                <input className="switcher__input" type="checkbox" id="toggleInput" checked={props.isChecked} onChange={props.handleCheckedChange} />
                <button className="switcher__slider" type="button" onClick={props.toggleChecked}></button>
            </span>
            <label className="switcher__text" htmlFor="toggleInput">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;