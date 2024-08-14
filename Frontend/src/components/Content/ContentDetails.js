import React from 'react';

const ContentDetails = ({ content }) => {
  return (
    <div>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};

export default ContentDetails;
