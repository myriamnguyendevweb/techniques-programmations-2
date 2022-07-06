import React from 'react'

const ToggleDark = (props) => {
    return (
        <div>
            <div class="wrapper"></div>
            <label class="switch">
                <input
                    type="checkbox"
                    id="checkbox-toggle"
                    onClick={() => {
                        props.toggleDark();
                    }}
                />
            </label>
        </div>
    )
}

export default ToggleDark;