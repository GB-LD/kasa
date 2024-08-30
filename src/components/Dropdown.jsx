import React, { useState } from 'react'

const Dropdown = (props) => {
    const {dropdownTitle, dropdownContent} = props;
    const [isOpen, setIsOpen] = useState(false);
    let dropdownContentHtml;

    if (typeof(dropdownContent) === "object") {
        dropdownContentHtml = <ul>{dropdownContent.map((item, index) => <p key={index}>{item}</p>)}</ul>;
    } else if (typeof(dropdownContent) === "string") {
        dropdownContentHtml = <p>{dropdownContent}</p>;
    }

  return (
    <div className='dropdown-wrapper'>
        <div className={`dropdown-header ${isOpen && "dropdown-open"}`}>
            <h3>{dropdownTitle}</h3>
            <button onClick={() => setIsOpen(prev => !prev)} >
                <img className={`${isOpen && "dropdown-open"}`} src="/src/assets/icons/chevron-down.svg" alt="boutton photo précédente" />
            </button>
        </div>
        <div className={`dropdown-content ${isOpen && "dropdown-open"}`}>
            <div>
                {dropdownContentHtml}
            </div>
        </div>
    </div>
  )
}

export default Dropdown