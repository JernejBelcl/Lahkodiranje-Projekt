import { Link } from "react-router-dom";

function cssHeader(props) {

    return (
<header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarText">                        
                       {/* <Link className="navbar-brand" to='/'>{props.title}</Link> */}
                        <Link className="navbar-brand" to='/'>Domov</Link>
                        
                                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link link-info" to='/css'>CSS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/races'>Enostavno</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/races'>Srednje</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to='/races'>Težavno</Link>
                                            </li>
                                        </ul>                                                              
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default cssHeader;