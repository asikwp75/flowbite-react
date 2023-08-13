import { DarkThemeToggle, Flowbite } from 'flowbite-react';

function DarkMode () {
    return (
        <Flowbite>
            <div  className=' fixed right-0 top-2/4   '>
                <DarkThemeToggle />
            </div>
        </Flowbite>
    )
}

export default DarkMode;