import { Navbar } from 'flowbite-react';

function Header () {
    return (
        <Navbar>
            <div className='max-w-screen-xl m-auto flex items-center justify-between w-full'>

                    <Navbar.Brand href="#">
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                        </span>
                    </Navbar.Brand>

                    <div className="flex">
                        <Navbar.Toggle />
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
            </div>

        </Navbar>

    )
}

export default Header;