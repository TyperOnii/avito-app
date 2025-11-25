import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface ImageSliderProp {
    images: string[]
}

export const ImageSlider = ({ images }: ImageSliderProp) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePreviousSlide = () => {
    setImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, position: 'relative' }}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', mb: 2 }}>
        <IconButton 
          onClick={handlePreviousSlide}
          sx={{ 
            position: 'absolute', 
            left: 8, 
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            }
          }}
        >
          <ChevronLeft />
        </IconButton>

        <img
          src={images[imageIndex]}
          alt={`Slide ${imageIndex}`}
          style={{
            width: '100%',
            height: '400px',
            display: 'block',
            borderRadius: 8,
            border: '1px solid grey'
          }}
        />

        <IconButton 
          onClick={handleNextSlide}
          sx={{ 
            position: 'absolute', 
            right: 8, 
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            }
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <p style={{ textAlign: 'center', marginTop: '15px' }}>Изображение {imageIndex + 1} из {images.length}</p>
    </Box>
  );
};