
import { Footer } from 'flowbite-react';
import {BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterEmail () {
    return (
            <div className='bg-gray-100 dark:bg-gray-800 py-24'>
                <div className=" max-w-screen-xl px-4 mx-auto ">

                <Footer className=' bg-transparent shadow-none'>
                    <div className="w-full">
                        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                            alt="Logo"
                            href="#"
                            src="/image/logof.png"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                Flowbite
                                </Footer.Link>
                                <Footer.Link href="#">
                                Tailwind CSS
                                </Footer.Link>
                            </Footer.LinkGroup>
                            </div>
                            <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                            </div>
                            <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                            </div>
                        </div>
                        </div>
                        <Footer.Divider />
                        <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="Flowbite™"
                            href="#"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                            href="#"
                            icon={BsFacebook}
                            />
                            <Footer.Icon
                            href="#"
                            icon={BsInstagram}
                            />
                            <Footer.Icon
                            href="#"
                            icon={BsTwitter}
                            />
                            <Footer.Icon
                            href="#"
                            icon={BsGithub}
                            />

                        </div>
                        </div>
                    </div>
                </Footer>
          </div>
          </div>

    )
}

export default FooterEmail;