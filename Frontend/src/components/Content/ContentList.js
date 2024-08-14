import React from 'react';
import { useSelector } from 'react-redux';
import ContentItem from './ContentItem';

const ContentList = () => {
  const contents = useSelector((state) => state.content.items);

  return (
    <div>
      <h2>Content List</h2>
      {contents.map((content) => (
        <ContentItem key={content.id} content={content} />
      ))}
    </div>
  );
};

export default ContentList;
