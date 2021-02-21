import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar color="dark" light expand="md" d-flex>
                <NavbarBrand href="/" style={{color: "#fff"}}>Our Team</NavbarBrand>
                <Link to="/add" className="btn btn-primary ml-auto">Create User</Link>
            </Navbar>
        </div>
    )
}

export default Header;
