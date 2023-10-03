import {FaHeart} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="">
            <hr className="w-[1200px] h-0.5 mx-auto my-4 bg-gray-100 rounded " />
            <div className="flex items-center justify-center">
                Copyright © 2023 All rights reserved | Made with <span className='px-1'> <FaHeart /></span> by PuzzleX | STKMT
            </div>

        </footer>
    )
}

export default Footer;