import React, { useState } from 'react';

function PhotoItem({ photo, index, removePhoto, editDescription }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(photo.description);

  const handleEdit = () => {
    editDescription(index, newDescription);
    setIsEditing(false);
  };

  return (
    <div className="photo-item">
      <img src={URL.createObjectURL(photo.file)} alt={photo.description} />
      {isEditing ? (
        <div className="photo-description">
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className="photo-description">
          <p>{photo.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => removePhoto(index)}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default PhotoItem;