import React from 'react';
import { useSelector } from 'react-redux';
import ContentItem from '../Content/ContentItem';

const AdminDashboard = () => {
  const contents = useSelector((state) => state.content.items);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {contents.map((content) => (
        <div key={content.id}>
          <ContentItem content={content} />
          <button>Approve</button>
          <button>Flag</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
