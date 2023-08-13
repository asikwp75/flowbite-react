
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Testimonials() {
  return (
    <section className="bg-white pb-48 dark:bg-gray-900 ">
      <div className=" max-w-screen-xl px-4 mx-auto ">
        <div className="text-center max-w-xl m-auto">
          <h2 className=" text-4xl font-bold mb-5">Testimonials</h2>
          <p className="text-gray-600">Email marketers find success by ignoring best practices and focusing on their customers.</p>
        </div>
        <div className='flex flex-wrap items-center gap-8 my-12 bg-gray-100 p-16 '>

          <div className=' basis-80 flex-grow'>
            <div className='text-4xl font-medium'>
              “Customers andinterested parties engaged.”
            </div>
          </div>

          <div className=' basis-80 flex-grow'>
            <Swiper
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="testimonials max-w-md pb-16"
                >
                  <SwiperSlide>
                      <div>
                          <p className='text-lg mb-5'>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                          <div className='flex items-center gap-4 flex-wrap'>
                              <div>
                                  <img
                                      alt="Testimonials"
                                      className="w-12 kh-12 rounded-full "
                                      src="/image/tes.png"
                                    />
                              </div>
                              <div className='flex flex-col '>
                                  <a className='text-bold hover:text-cyan-500 mb-1' href="#">King Star</a>
                                  <span className='text-sm'>— Gavin Wieske, Marketing Manager</span>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div>
                          <p className='text-lg mb-5'>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                          <div className='flex items-center gap-4 flex-wrap'>
                              <div>
                                  <img
                                      alt="Testimonials"
                                      className="w-12 kh-12 rounded-full "
                                      src="/image/tes2.png"
                                    />
                              </div>
                              <div className='flex flex-col '>
                                  <a className='text-bold hover:text-cyan-500 mb-1' href="#">King Star</a>
                                  <span className='text-sm'>— Gavin Wieske, Marketing Manager</span>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div>
                          <p className='text-lg mb-5'>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                          <div className='flex items-center gap-4 flex-wrap'>
                              <div>
                                  <img
                                      alt="Testimonials"
                                      className="w-12 kh-12 rounded-full "
                                      src="/image/tes3.png"
                                    />
                              </div>
                              <div className='flex flex-col '>
                                  <a className='text-bold hover:text-cyan-500 mb-1' href="#">King Star</a>
                                  <span className='text-sm'>— Gavin Wieske, Marketing Manager</span>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
            </Swiper>

          </div>

        </div>


      </div>
    </section>
  )
}

export default Testimonials;

