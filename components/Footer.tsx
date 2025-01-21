'use client';

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className={`${ theme === 'light' ? 'bg-white' : 'bg-[#232e3d]'} flex border-t-2 border-[#545b63] shadow-lg justify-center space-x-4 text-gray-300 py-4`}>
            <a href='https://github.com/mutaremalcolm' target='blank' rel='nooopener noreferrer'
                className={ `hover:text-blue-600 ${ theme === 'light' ? 'text-gray-700' : 'text-gray-400'}` }>
                <FaGithub size={ 24 } />
            </a>
            <a href='https://twitter.com/MalcolmTech' target='blank' rel='nooopener noreferrer'
                className={ `hover:text-blue-600 ${ theme === 'light' ? 'text-gray-700' : 'text-gray-400'}` }>
                <FaTwitter size={ 24 } />
            </a>
            <a href='https://www.linkedin.com/in/malcolm-mutare-a234a61aa/' target='blank' rel='nooopener noreferrer'
                className={ `hover:text-blue-600 ${ theme === 'light' ? 'text-gray-700' : 'text-gray-400'}` }>
                <FaLinkedin size={ 24 } />
            </a>
        </footer>
    )
}