import { Button, Navbar } from 'flowbite-react';

function Header () {
    return (
            <div className='bg-gray-100 dark:bg-gray-800'>

                    <Navbar className='max-w-screen-xl px-4 py-8 mx-auto bg-transparent ' fluid rounded>
                    <Navbar.Brand href="https://flowbite-react.com">
                    <a href='' className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                       MailMaker
                    </a>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                    <a  href="/">
                       Log in
                    </a>
                    <a  href="/">
                      Sign Up
                    </a>
                    </div>
                    <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                        Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

    )
}

export default Header;