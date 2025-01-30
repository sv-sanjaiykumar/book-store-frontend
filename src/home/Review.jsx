import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import profilePic from'../assets/profile.jpg';
// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Review Card 1 */}
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className='text-amber-500 flex gap-1 mb-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mb-6">
              "Amazing product! I can't believe the quality. The customer service was also great. Highly recommend!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={profilePic}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Mark Ping</h4>
                <p className="text-sm text-gray-500">CEO, ABC Company</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Review Card 2 */}
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className='text-amber-500 flex gap-1 mb-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mb-6">
              "The service was exceptional, and the product exceeded my expectations. Will definitely purchase again!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={profilePic}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Jane Doe</h4>
                <p className="text-sm text-gray-500">Marketing Director, XYZ Corp</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Review Card 3 */}
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className='text-amber-500 flex gap-1 mb-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mb-6">
              "A wonderful experience from start to finish. The product was high quality, and the team was responsive and professional."
            </p>
            <div className="flex items-center gap-3">
              <img
                src={profilePic}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Emily Johnson</h4>
                <p className="text-sm text-gray-500">Founder, EcoBrand</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Review Card 4 */}
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className='text-amber-500 flex gap-1 mb-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mb-6">
              "Quality is top-notch, and the customer support team was always available to assist. I highly recommend this service!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={profilePic}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">James Smith</h4>
                <p className="text-sm text-gray-500">Co-Founder, Startup Solutions</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Review Card 5 */}
        <SwiperSlide>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className='text-amber-500 flex gap-1 mb-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-600 mb-6">
              "I was impressed with how quickly I received my order. The quality was amazing, and it was exactly what I needed!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={profilePic}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">David Lee</h4>
                <p className="text-sm text-gray-500">Product Manager, Tech Innovations</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed with different reviews */}
      </Swiper>
    </div>
  );
};

export default Review;
