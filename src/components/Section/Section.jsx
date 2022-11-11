import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
           <>   
           <h1>{title}</h1> 
               {children}
           </>
)
};

Section.propTypes = {
   
  title: PropTypes.string.isRequired,
  
};