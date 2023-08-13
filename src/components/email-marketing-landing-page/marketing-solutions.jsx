import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

function MarketingSolutions() {
  return (
    <section className="bg-white pb-48 dark:bg-gray-900 ">
      <div className=" max-w-screen-xl px-4 mx-auto ">
          <h2 className="text-center text-4xl font-bold max-w-xl m-auto">Inbound marketing solutions for what you need to do</h2>

          <Tabs.Group className='tabs-wrap px-16 mt-14'
             aria-label="Full width tabs"
             style="fullWidth"
            >
              <Tabs.Item
              
                active
                icon={HiClipboardList}
                title="Enterprise"
              >
                <div className="px-16 mt-4">
                  <h3 className=' text-2xl font-medium mb-4'>SMS and self-employed</h3>
                  <p className=' text-gray-500 mb-5'>A tool like Acumbamail is very useful for SMEs and self-employed workers due to its ease of use to manage your campaigns from a single platform, without the need for a large team to carry them out.</p>
                  <a className=' text-lg font-bold text-cyan-700 hover:text-cyan-800' href="#">Find Out More</a>
                </div>
              </Tabs.Item>

              <Tabs.Item className=''
                icon={MdDashboard}
                title="SMS and self-employed">
               <div className="px-16 mt-4">
                  <h3 className=' text-2xl font-medium mb-4'>SMS and self-employed 2</h3>
                  <p className=' text-gray-500 mb-5'>A tool like Acumbamail is very useful for SMEs and self-employed workers due to its ease of use to manage your campaigns from a single platform, without the need for a large team to carry them out.</p>
                  <a className=' text-lg font-bold text-cyan-700 hover:text-cyan-800' href="#">Find Out More</a>
                </div>
              </Tabs.Item>

              <Tabs.Item className=''
              icon={HiAdjustments}
              title="Agencies">
                <div className="px-16 mt-4">
                  <h3 className=' text-2xl font-medium mb-4'>SMS and self-employed 3</h3>
                  <p className=' text-gray-500 mb-5'>A tool like Acumbamail is very useful for SMEs and self-employed workers due to its ease of use to manage your campaigns from a single platform, without the need for a large team to carry them out.</p>
                  <a className=' text-lg font-bold text-cyan-700 hover:text-cyan-800' href="#">Find Out More</a>
                </div>
              </Tabs.Item>

              <Tabs.Item className='' 
              icon={HiClipboardList}
              title="Institution">
               <div className="px-16 mt-4">
                  <h3 className=' text-2xl font-medium mb-4'>SMS and self-employed 4</h3>
                  <p className=' text-gray-500 mb-5'>A tool like Acumbamail is very useful for SMEs and self-employed workers due to its ease of use to manage your campaigns from a single platform, without the need for a large team to carry them out.</p>
                  <a className=' text-lg font-bold text-cyan-700 hover:text-cyan-800' href="#">Find Out More</a>
                </div>
              </Tabs.Item>

            </Tabs.Group>
      </div>
    </section>
  )
}

export default MarketingSolutions;

