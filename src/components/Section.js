const HomePage = () => {
    return ( 
        <div className="flex flex-col items-center bg-white font-sans">
        {/* Header Section */}
        <header className="flex justify-between items-center w-full px-8 py-4 bg-red-100">
          <div className="flex items-center">
            <img
              src="/path-to-logo.png" // Replace with your logo path
              alt="Vegan Fuel Logo"
              className="w-12 h-12 mr-2"
            />
            <h1 className="text-2xl font-bold text-black">Vegan Fuel</h1>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600">
            Order Now
          </button>
        </header>
  
        {/* Discount Section */}
        <section className="relative w-full bg-red-500 text-white flex justify-center items-center py-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Get Up To</h2>
            <p className="text-xl mt-2">50% Off</p>
            <p className="text-sm">On Your Two Orders</p>
          </div>
        </section>
  
        {/* Main Content Section */}
        <main className="flex flex-col md:flex-row w-full max-w-6xl mt-8 px-4">
          {/* Left Content */}
          <div className="flex-1 px-4">
            <h2 className="text-2xl font-bold text-black mb-4">Your Daily Dish A <span className="text-red-500">Food</span> Journey</h2>
            <p className="text-gray-700 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600">
              Sign Up
            </button>
            <p className="text-gray-600 mt-4">
              Do you have an account? <span className="text-red-500 cursor-pointer">Login</span>
            </p>
          </div>
  
          {/* Right Image Section */}
          <div className="flex-1 flex justify-center items-center relative">
            <img
              src="/path-to-salad-image.png" // Replace with your image path
              alt="Healthy Salad"
              className="w-80 h-80 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </main>
  
        {/* Carousel Section */}
        <section className="flex w-full justify-center items-center mt-8 px-4">
          <div className="flex items-center space-x-4">
            {/* Left Arrow */}
            <button className="text-gray-500 hover:text-black">&#8249;</button>
  
            {/* Carousel Images */}
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/path-to-food1.png" // Replace with your image path
                alt="Dish 1"
                className="w-32 h-32 rounded-md object-cover"
              />
              <img
                src="/path-to-food2.png" // Replace with your image path
                alt="Dish 2"
                className="w-32 h-32 rounded-md object-cover"
              />
              <img
                src="/path-to-food3.png" // Replace with your image path
                alt="Dish 3"
                className="w-32 h-32 rounded-md object-cover"
              />
            </div>
  
            {/* Right Arrow */}
            <button className="text-gray-500 hover:text-black">&#8250;</button>
          </div>
        </section>
  
        
      </div>
     );
}
 
export default HomePage;