import React, { useRef } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FiCamera } from 'react-icons/fi';

const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      // Process the selected image file
      console.log(file);
    }
  };

  return (
    <Box w={{ base: 'full', md: 'md' }} p="4">
      <InputGroup>
        <Input type="text" placeholder="Search..." />
        <InputRightElement>
          <IconButton
            icon={<FiCamera />}
            onClick={handleCameraClick}
            aria-label="Camera"
          />
        </InputRightElement>
      </InputGroup>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default SearchBar;


// import React, { useRef, useState } from 'react';
// import { Box, Input, InputGroup, InputRightElement, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
// import { FiCamera } from 'react-icons/fi';

// const SearchBar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const fileInputRef = useRef(null);
//   const videoRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   const handleCameraClick = () => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then((stream) => {
//           if (videoRef.current) {
//             videoRef.current.srcObject = stream;
//             videoRef.current.play();
//           }
//           onOpen();
//         })
//         .catch((err) => console.error(err));
//     } else {
//       // Fallback to file input if getUserMedia is not supported
//       if (fileInputRef.current) {
//         fileInputRef.current.click();
//       }
//     }
//   };

//   const handleCapture = () => {
//     const context = document.createElement('canvas').getContext('2d');
//     if (context && videoRef.current) {
//       context.drawImage(videoRef.current, 0, 0, 640, 480);
//       const dataUrl = context.canvas.toDataURL('image/png');
//       setCapturedImage(dataUrl);
//       videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//       onClose();
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       // Process the selected image file
//       console.log(file);
//     }
//   };

//   return (
//     <Box w={{ base: 'full', md: 'md' }} p="4">
//       <InputGroup>
//         <Input type="text" placeholder="Search..." />
//         <InputRightElement>
//           <IconButton
//             icon={<FiCamera />}
//             onClick={handleCameraClick}
//             aria-label="Camera"
//           />
//         </InputRightElement>
//       </InputGroup>
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         accept="image/*"
//         onChange={handleFileChange}
//       />

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Capture Image</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <video ref={videoRef} width="100%" height="auto" />
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" onClick={handleCapture}>Capture</Button>
//             <Button variant="ghost" onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>

//       {capturedImage && (
//         <Box mt="4">
//           <img src={capturedImage} alt="Captured" />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default SearchBar;
