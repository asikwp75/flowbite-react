import { Button, TextInput } from 'flowbite-react';

function OnwHeroSecton() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className=" max-w-screen-xl px-4 pt-16 mx-auto ">
        <div className="text-center max-w-4xl m-auto">
          <h1 className="text-6xl font-semibold ">
            SMS Marketing and <span className=" text-cyan-700">Email Marketing</span> Made Easy.
          </h1>
          <p className="mt-5 text-lg text-gray-600">You can get started with your marketing automation in a few minutes</p>

          <form className="flex items-center flex-row gap-4 max-w-lg m-auto my-12">
            <div className='w-full'>
              <TextInput className='hero-email'

                id="email2"
                placeholder="Enter email"
                required
                shadow
                type ="email"
              />
            </div>
            <Button className=" w-1/3 h-12 rounded-none bg-black text-white" type="submit">
               Let’s Talk
            </Button>
          </form>

          <img
          alt="Hero image"
          className=""
          src="/image/dashboard.png"
        />

        </div>
      </div>
    </section>
  )
}

export default OnwHeroSecton;

