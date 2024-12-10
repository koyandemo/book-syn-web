import React from 'react';
import './Tag.css';
import { Link } from 'react-router-dom';

const Tag = ({ title }) => {
 return (
  <Link to={'/'} className="tag">
   <a>
    {title}
   </a>
  </Link>
 )
};

export default Tag;