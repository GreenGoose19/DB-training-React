import React from 'react';
import PhotoItem from './PhotoItem';

function PhotoGrid({ photos, removePhoto, editDescription }) {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <PhotoItem
          key={index}
          photo={photo}
          index={index}
          removePhoto={removePhoto}
          editDescription={editDescription}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;