
function About() {
  return (
    <section className="bg-cyan-500  dark:bg-gray-900  bg-[url('image/shape.png')]  p-28">
      <div className=" max-w-screen-xl px-4 mx-auto ">
         <div className="flex flex-wrap gap-20 max-w-6xl m-auto items-center  ">
            <div className="basis-60 flex-grow">
               <p className="text-2xl text-gray-100  font-medium ">With our free resources you will become an expert in direct marketing. Learn how to get the most out of the tool with our support articles or contact us to solve any questions in no time.</p>
            </div>
            <div className="basis flex-grow " >
                <div className="flex items-center gap-8 mb-10">
                   <div className="flex flex-col gap-1">
                      <span className="text-4xl text-white font-medium ">120%</span>
                      <span className="text-gray-200">Lorem ipsum dolor</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-4xl text-white font-medium ">120%</span>
                      <span className="text-gray-200">Lorem ipsum dolor</span>
                   </div>

                </div>
                <a href="#" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                      <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Find Out More
                      </span>
                    </a>
            </div>
         </div>


      </div>
    </section>
  )
}

export default About;

