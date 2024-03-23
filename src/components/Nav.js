import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import styled from 'styled-components';

const Nav = () => {
    const Nav = styled.nav`
    .navbar-lists {
        display: flex;
        gap: 4.8rem;
        align-items: center;
    }

    .navbar-link {
        &:link,
        &:visited {
            color: ${({theme}) => theme.colors.text};
            text-decoration: none;
            font-size: 1.8rem;
            font-weight: 500;
        }
    }
    
    `
    return (
        <Nav>
            <div className='navbar'>
                <ul>
                    <li>
                        <NavLink to={"/"}className="navbar-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}className="navbar-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/products"}className="navbar-link">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}className="navbar-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"}className="navbar-link">
                        <FiShoppingCart className="cart-trolley"/>
                        <span className='cart-total-itam'>10</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </Nav>
        // <div></div>
    )
}

export default Nav