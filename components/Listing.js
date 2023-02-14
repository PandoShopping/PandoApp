import React from 'react';

const Listing = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.name} 
        {link.description}
      </div>
    </div>
  );
};

export default Listing;