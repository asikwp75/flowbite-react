import { Navbar } from 'flowbite-react';

function Header () {
    return (
        <Navbar
            fluid
            rounded
            >
            <Navbar.Brand href="#">
                {/* <img
                alt="Flowbite React Logo"
                className="mr-3 h-6 sm:h-9"
                src=""
                /> */}
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
            </Navbar>

    )
}

export default Header;