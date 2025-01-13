import { useState, useEffect } from 'react';
import image from '../assets/1-2.jpeg';
import image1 from '../assets/3-1.jpeg';
import image2 from '../assets/cofee_re.jpeg';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image, image1, image2, image, image1, image2]; // Array of images

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Handle left arrow click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle right arrow click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Dynamically determine the images to show
  const displayedImages = images
    .slice(currentIndex, currentIndex + 4)
    .concat(images.slice(0, Math.max(0, currentIndex + 4 - images.length)));

  return (
    <div className="flex flex-col items-center bg-white font-sans">
      {/* Carousel Section */}
      <section className="relative flex w-full justify-center items-center mt-8 px-4">
        <div className="relative flex items-center w-full max-w-4xl">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-gray-500 hover:text-black absolute left-2 z-10 bg-white rounded-full shadow-md p-2"
          >
            &#8249;
          </button>

          {/* Carousel Images */}
          <div className="flex justify-center space-x-5 overflow-hidden">
            {displayedImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Dish ${currentIndex + index + 1}`}
                className="w-48 h-48 rounded-md object-cover transition-transform duration-300"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-gray-500 hover:text-black absolute right-2 z-10 bg-white rounded-full shadow-md p-2"
          >
            &#8250;
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
