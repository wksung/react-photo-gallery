import React from 'react';
import '../css/NavBar.css';

const NavBar = (props) => {

    const dropdownDOM = props.searchTerms.map((searchTerm, index) => {
        return(
            <div className="dropdown-item" key={ index }>{ searchTerm }</div>
        )
    });

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Project Gallery</a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={ props.randomiseImg }>Randomise!</a>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save/Load
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="dropdown-item" onClick={ props.loadGallery }>Load my gallery</div>
                            <div className="dropdown-item" onClick={ props.saveGallery }>Save my gallery</div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        History
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        { props.searchTerms.length !== 0 ? dropdownDOM : 'no search history' }
                        </div>
                    </li>
                </ul>
                <div className="small errormessage">
                   { props.errorLog }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
