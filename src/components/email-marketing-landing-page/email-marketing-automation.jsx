import { Card } from 'flowbite-react';

function EmailMarketingAutomation() {
  return (
    <section className="bg-white pb-48 dark:bg-gray-900 ">
      <div className=" max-w-screen-xl px-4 mx-auto ">
        <div className="text-center max-w-xl m-auto">
          <h2 className=" text-4xl font-bold mb-5">Email Marketing Automation Made Simple</h2>
          <p className="text-gray-600">Email marketers find success by ignoring best practices and focusing on their customers.</p>
        </div>
        <div className='flex flex-wrap gap-8 my-12'>

          <Card className=" bg-gray-100 shadow-none border-none basis-80 flex-grow text-center p-8">
                  <div className='block mb-1'>
                    <span className='bg-cyan-500 p-4  rounded-md text-lg font-bold text-white '>01</span>
                  </div>
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                    Expanding your business
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Try out Benchmark for free to discover how simple effective email marketing can be.
                  </p>
          </Card>
          <Card className=" bg-gray-100 shadow-none border-none basis-80 flex-grow text-center p-8">
                  <div className='block mb-1'>
                    <span className='bg-cyan-500 p-4  rounded-md text-lg font-bold text-white '>02</span>
                  </div>
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                    Sign up free
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Try out Benchmark for free to discover how simple effective email marketing can be.
                  </p>
          </Card>
          <Card className=" bg-gray-100 shadow-none border-none basis-80 flex-grow text-center p-8">
                  <div className='block mb-1'>
                    <span className='bg-cyan-500 p-4  rounded-md text-lg font-bold text-white '>03</span>
                  </div>
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                    Explore your options
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Try out Benchmark for free to discover how simple effective email marketing can be.
                  </p>
          </Card>

        </div>
        <div className='text-center'>

        <a href="#" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Now
            </span>
         </a>
        </div>

      </div>
    </section>
  )
}

export default EmailMarketingAutomation;

