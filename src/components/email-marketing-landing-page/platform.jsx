
function Platform() {
  return (
    <section className="bg-white pb-48 dark:bg-gray-900 ">
      <div className=" max-w-screen-xl px-4 mx-auto ">
        <div className="text-center max-w-xl m-auto">
          <h2 className=" text-4xl font-bold">All you need to A single platform</h2>
        </div>

          <div className="flex flex-wrap items-center gap-8 my-12">
              <div className="basis-80 flex-grow">
                <div className="flex flex-wrap items-center gap-8">
                    <div className=" basis-60 flex-grow">
                        <h2 className="text-2xl font-medium mb-6">Homework to help you take action.</h2>
                        <p className="text-gray-600 mb-12">To prevent procrastination and help you apply what you learn, you’ll get manageable homework broken out</p>
                        <a href="#" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Find Out More
                          </span>
                        </a>
                    </div>
                    <div className=" basis-60 flex-grow">
                        <h2 className="text-2xl font-medium mb-6">How to write every email you should be sending.</h2>
                        <p className="text-gray-600 mb-12">Unsure what emails you should send and what to write in them? Learn about the most important</p>
                        <a href="#" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                          <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Find Out More
                          </span>
                        </a>
                    </div>
                </div>
              </div>
              <div className="basis-80 flex-grow">
              <img
                  alt="Testimonials"
                  src="/image/platform.png"
                />
              </div>
          </div>


      </div>
    </section>
  )
}

export default Platform;

