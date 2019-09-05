import React from 'react';
import {NavLink} from 'react-router-dom'
import {NavbarSection , Logo , LogoText , UlList , ListItem , Link} from './style.js'
const Navbar = () => {
    return (
      <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Python Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><NavLink className="navbar-a a1" to="/">Home</NavLink></ListItem>
                    <ListItem><Link href="#">Work</Link></ListItem>
                    <ListItem><Link href="#">Portfolio</Link></ListItem>
                    <ListItem><Link href="#">Resume</Link></ListItem>
                    <ListItem><Link href="#">About</Link></ListItem>
                    <ListItem><NavLink className="navbar-a a2" to="/contact">Contact</NavLink></ListItem>
                </UlList>
            </div>
        </NavbarSection>
      )
}
export default Navbar;
