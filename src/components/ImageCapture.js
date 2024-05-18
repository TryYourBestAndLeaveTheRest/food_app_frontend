// src/components/ImageCapture.js
import React, { useRef, useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const ImageCapture = ({ onImageUpload }) => {
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCapture = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setSelectedImage(e.target.result);
        onImageUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleCapture}
        style={{ display: 'none' }}
      />
      <Button onClick={() => inputRef.current.click()}>Capture Image</Button>
      {selectedImage && (
        <Box mt={4}>
          <img src={selectedImage} alt="Selected" width="100%" />
        </Box>
      )}
    </Box>
  );
};

export default ImageCapture;
