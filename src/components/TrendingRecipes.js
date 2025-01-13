import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import 'swiper/css'; // Import the Swiper core CSS
import 'swiper/css/navigation'; // If using navigation (optional)
import 'swiper/css/pagination'; // If using pagination (optional)


// Data for recipes
const popularDishes = [
  {
    id: 1,
    name: "Chocolate Brownie",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image1.jpg",
    reviews: "435 Ratings & 45 Reviews",
  },
  {
    
    id: 2,
    name: "Veg Platter",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image2.jpg",
    reviews: "405 Ratings & 55 Reviews",
  },
  {
    id: 3,
    name: "Fruit Cake",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image3.jpg",
    reviews: "475 Ratings & 35 Reviews",
  },
  {
    id: 4,
    name: "Cheesy Pizza",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image4.jpg",
    reviews: "325 Ratings & 25 Reviews",
  },
  {
    id: 5,
    name: "Sushi Rolls",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image5.jpg",
    reviews: "285 Ratings & 18 Reviews",
  },
  {
    id: 6,
    name: "Spring Rolls",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image6.jpg",
    reviews: "310 Ratings & 20 Reviews",
  },
  {
    id: 7,
    name: "French Fries",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image7.jpg",
    reviews: "400 Ratings & 40 Reviews",
  },
  {
    id: 8,
    name: "Veg Wrap",
    price: "INR 250",
    rating: "4.3",
    image: "/path-to-image8.jpg",
    reviews: "290 Ratings & 25 Reviews",
  },
];

const TrendingRecipes = () => {
  return (
    <section className="mx-8 sm:mx-12 mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Trending Recipes</h2>
      <Swiper
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Show one slide at a time
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides on small screens
          },
          1024: {
            slidesPerView: 4, // Show 4 slides on large screens
          },
        }}
        loop={true} // Enable loop
        autoplay={{
          delay: 2500, // Auto slide every 2.5 seconds
          disableOnInteraction: false, // Keep autoplaying even after user interaction
        }}
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
              <h3 className="text-lg font-semibold text-gray-700">{dish.name}</h3>
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

export default TrendingRecipes;
