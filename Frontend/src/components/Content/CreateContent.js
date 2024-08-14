import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContent } from '../../store/contentSlice';

const CreateContent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(addContent({ title, description }));
  };

  return (
    <div>
      <h2>Create Content</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateContent;
