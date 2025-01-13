import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

// Importing images
import image3 from '../assets/a.png';
import image4 from '../assets/b.png';
import image5 from '../assets/c.png';
import image6 from '../assets/d.png';
import image7 from '../assets/e.png';
import image8 from '../assets/f.png';
import image9 from '../assets/g.png';
import image10 from '../assets/h.png';

// Updated data with image paths
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

const TrendingRecipes = () => {
  return (
    <section className="mx-4 sm:mx-8 lg:mx-12 mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Trending Recipes</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="pb-12"
      >
        {popularDishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {dish.name}
                </h3>
                <p className="text-gray-600 font-medium">{dish.price}</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-red-500 font-bold">{dish.rating}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-500">
                    ({dish.reviews.split(' ')[0]})
                  </span>
                </div>
                <p className="text-sm text-gray-400">{dish.reviews}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingRecipes;
