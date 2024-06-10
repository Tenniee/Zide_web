import React from "react";

const Buttons = ({showDropdown, setShowDropdown, items}) =>{
    return(
        <div className="dropdown-wrapper">
            <button onClick={setShowDropdown} className="trigger-button">
                Trigger Dropdown
            </button>
            {showDropdown && (
            <div className="dropdown">
                Hey i am  the dropdown
            </div>
            )}
            <ul className={showDropdown ? "active" : ""}>
                {items.map((items) => (
                    <li>{items}</li>
                ))}
            </ul>
        </div>
    );
};
export default Buttons;