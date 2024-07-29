import React, { useState } from 'react';

function UploadForm({ addPhoto }) {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      addPhoto({ file, description });
      setFile(null);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept="image/*"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Photo</button>
    </form>
  );
}

export default UploadForm;