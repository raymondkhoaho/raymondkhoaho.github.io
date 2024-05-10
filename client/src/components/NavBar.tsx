import React from 'react';
import { Link } from 'react-router-dom';

// Define props interface for Navbar component
interface NavbarProps {
  links: { text: string; path: string }[];
}

// Navbar component
const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
