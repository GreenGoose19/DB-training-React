import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import PhotoGrid from './components/PhotoGrid';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const removePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const editDescription = (index, newDescription) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index].description = newDescription;
    setPhotos(updatedPhotos);
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <UploadForm addPhoto={addPhoto} />
      <PhotoGrid
        photos={photos}
        removePhoto={removePhoto}
        editDescription={editDescription}
      />
    </div>
  );
}

export default App;