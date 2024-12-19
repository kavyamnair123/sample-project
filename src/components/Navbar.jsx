import React from 'react'

const Navbar = () => {
    return (
        <div>
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" link="">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" link="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" link="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar