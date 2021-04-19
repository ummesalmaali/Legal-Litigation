import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="row navbar navbar-expand-lg navbar-light  d-flex w-100">
  <div>
  <a className="col-md-2 navbar-brand" href="#"><h3>Legal <br/>Litigation</h3></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>

  <div className="col-md-10 collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-5" to='/home'>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link mr-5" to='/aboutUs'>About us</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link mr-5" to='/dashboard'>Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5 " href="#">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5" to="/admin">Admin</Link>
      </li>
      <form className="form-inline my-2 my-lg-0">
        <Link to ='/login'><button style={{backgroundColor:'blue',color:'white'}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
    </form>
    </ul>
    
  </div>
</nav>
    );
};

export default NavBar;