import React from 'react'

const DarkMode = () => {
    return (
        <div className="toggle-theme-wrapper">
            <label className="toggle-them" hmtlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                />
                <div className="sliderRound"></div>
            </label>
        </div>
    )
}

export default DarkMode;