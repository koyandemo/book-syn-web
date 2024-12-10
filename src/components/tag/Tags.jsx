import React from 'react';
import './Tags.css';
import Tag from './Tag';

const tags = ['Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology', 'Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology', 'Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology', 'Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology', 'Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology', 'Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology', 'Business', 'Technology', 'Sport', 'Art', 'Lifestyle', 'Three', 'Photography', 'Lifestyle', 'Art', 'Education', 'Social', 'Entertainment', 'Health', 'Politics', 'Technology']


const Tags = () => {
 return (
  <div className='tags'>
   <h3 className='tags-title'>Tags</h3>
   <div className='tags-list'>
    {tags.map((tag, i) => (
     <Tag key={i} title={tag}></Tag>
    ))}
   </div>
  </div>
 )
};

export default Tags;