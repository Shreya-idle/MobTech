import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Import the Swiper core CSS
import "swiper/css/navigation"; // If using navigation (optional)
import "swiper/css/pagination"; // If using pagination (optional)

// Importing images
import image3 from '../assets/a.png';
import image4 from '../assets/b.png';
import image5 from '../assets/c.png';
import image6 from '../assets/d.png';
import image7 from '../assets/e.png';
import image8 from '../assets/f.png';
import image9 from '../assets/g.png';
import image10 from '../assets/h.png';

// Data for recipes
const popularDishes = [
  {
      id: 1,
      name: "Chocolate Brownie",
      price: "INR 250",
      rating: "4.3",
      reviews: "435 Ratings & 45 Reviews",
      image: image3,
    },
    {
      id: 2,
      name: "Veg Platter",
      price: "INR 250",
      rating: "4.3",
      reviews: "405 Ratings & 55 Reviews",
      image: image4,
    },
    {
      id: 3,
      name: "Fruit Cake",
      price: "INR 250",
      rating: "4.3",
      reviews: "475 Ratings & 35 Reviews",
      image: image5,
    },
    {
      id: 4,
      name: "Cheesy Pizza",
      price: "INR 250",
      rating: "4.3",
      reviews: "325 Ratings & 25 Reviews",
      image: image6,
    },
    {
      id: 5,
      name: "Sushi Rolls",
      price: "INR 250",
      rating: "4.3",
      reviews: "285 Ratings & 18 Reviews",
      image: image7,
    },
    {
      id: 6,
      name: "Spring Rolls",
      price: "INR 250",
      rating: "4.3",
      reviews: "310 Ratings & 20 Reviews",
      image: image8,
    },
    {
      id: 7,
      name: "French Fries",
      price: "INR 250",
      rating: "4.3",
      reviews: "400 Ratings & 40 Reviews",
      image: image9,
    },
    {
      id: 8,
      name: "Veg Wrap",
      price: "INR 250",
      rating: "4.3",
      reviews: "290 Ratings & 25 Reviews",
      image: image10,
    },
  ];
  

const PopularDishes = () => {
  return (
    <section className="mx-8 sm:mx-12 mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Popular Dishes</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {popularDishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="border rounded-lg shadow-md hover:shadow-lg p-4">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {dish.name}
              </h3>
              <p className="text-gray-500">{dish.price}</p>
              <p className="text-sm text-gray-400">{dish.reviews}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 font-bold">{dish.rating}</span>
                <span className="text-yellow-500">⭐</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularDishes;
