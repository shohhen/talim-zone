import './menu.scss';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './menu.scss';




/**
 * Renders a sidebar menu with links to different sections of a webpage and a button to call a phone number.
 * @returns {JSX.Element} The sidebar menu component.
 */
export default function Default() {
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Handles the close event of the sidebar menu.
   */
  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu right>
       <li>
          <AnchorLink href="#hero">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#courses">Courses</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#features">Features</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#testimonials">Testimonials</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#faq">FAQ</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      
    </Menu>
  );
}