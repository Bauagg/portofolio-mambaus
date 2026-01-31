'use client';

import CloseIcon from '@/app/asets/icons/close';
import OpenMenuIcon from '@/app/asets/icons/open_menu';
import { useLanguageStore } from '@/app/store/language';
import { useState } from 'react';

export default function Navbar() {
    const { language, toggleLanguage } = useLanguageStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-xl font-semibold text-black dark:text-white">
                            Mambaus
                        </div>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            <a
                                href="#about"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'About' : 'Tentang'}
                            </a>
                            <a
                                href="#services"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'Services' : 'Layanan'}
                            </a>
                            <a
                                href="#experience"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'Experience' : 'Pengalaman'}
                            </a>
                            <a
                                href="#contact"
                                className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'Contact' : 'Kontak'}
                            </a>
                        </div>

                        {/* Language Toggle - Desktop */}
                        <button
                            onClick={toggleLanguage}
                            className="hidden md:block relative w-32 h-12 bg-white dark:bg-gray-800 rounded-full transition-colors duration-300 focus:outline-none border-[1.5px] border-black dark:border-white cursor-pointer"
                            style={{ boxShadow: '4px 4px 0px #212529' }}
                            aria-label="Toggle language"
                        >
                            <div className="relative w-full h-full flex items-center rounded-full">
                                {/* Sliding Circle with Text */}
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 w-14 h-10 bg-black dark:bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${language === 'IND' ? 'translate-x-[4rem]' : 'translate-x-1'}`}
                                >
                                    <span className="text-sm font-medium text-white dark:text-black">
                                        {language}
                                    </span>
                                </div>

                                {/* Background Labels */}
                                <span className={`absolute left-5 text-sm font-medium transition-opacity duration-300 ${language === 'ENG' ? 'opacity-0' : 'opacity-100 text-[#ADB5BD]'}`}>
                                    ENG
                                </span>
                                <span className={`absolute right-5 text-sm font-medium transition-opacity duration-300 ${language === 'IND' ? 'opacity-0' : 'opacity-100 text-[#ADB5BD]'}`}>
                                    IND
                                </span>
                            </div>
                        </button>

                        {/* Hamburger Menu Button - Mobile */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-black dark:text-white border-2 border-white bg-black dark:border-white rounded"
                            style={{ boxShadow: '4px 4px 0px #212529' }}
                            aria-label="Toggle menu"
                        >
                            <OpenMenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-black md:hidden">
                    <div className="flex flex-col h-full">
                        {/* Header with Logo and Close Button */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                            <div className="text-xl font-semibold text-black dark:text-white">
                                Mambaus
                            </div>
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 text-black dark:text-white border-2 border-black dark:border-white rounded"
                                style={{ boxShadow: '4px 4px 0px #212529' }}
                                aria-label="Toggle menu"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="flex-1 flex flex-col items-center justify-start gap-6 px-6 pt-20">
                            <a
                                href="#about"
                                onClick={toggleMenu}
                                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'About' : 'Tentang'}
                            </a>
                            <a
                                href="#services"
                                onClick={toggleMenu}
                                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'Services' : 'Layanan'}
                            </a>
                            <a
                                href="#experience"
                                onClick={toggleMenu}
                                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'Experience' : 'Pengalaman'}
                            </a>
                            <a
                                href="#contact"
                                onClick={toggleMenu}
                                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {language === 'ENG' ? 'Contact' : 'Kontak'}
                            </a>

                            {/* Language Toggle - Mobile */}
                            <button
                                onClick={toggleLanguage}
                                className="relative w-full bg-white dark:bg-gray-800 rounded-full transition-colors duration-300 focus:outline-none border-[1.5px] border-black dark:border-white"
                                style={{
                                    height: '50px',
                                    boxShadow: '4px 4px 0px #212529'
                                }}
                                aria-label="Toggle language"
                            >
                                <div className="relative w-full h-full flex items-center rounded-full">
                                    {/* Sliding Circle with Text */}
                                    <div
                                        className={`absolute top-1/2 -translate-y-1/2 bg-black dark:bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${language === 'IND' ? 'right-1' : 'left-1'
                                            }`}
                                        style={{
                                            width: 'calc(50% - 8px)',
                                            height: '42px',
                                            borderRadius: '100px'
                                        }}
                                    >
                                        <span className="text-xl font-medium text-white dark:text-black">
                                            {language}
                                        </span>
                                    </div>

                                    {/* Background Labels */}
                                    <span className={`absolute left-1/4 -translate-x-1/2 text-xl font-medium transition-opacity duration-300 ${language === 'ENG' ? 'opacity-0' : 'opacity-100 text-[#ADB5BD]'}`}>
                                        ENG
                                    </span>
                                    <span className={`absolute right-1/4 translate-x-1/2 text-xl font-medium transition-opacity duration-300 ${language === 'IND' ? 'opacity-0' : 'opacity-100 text-[#ADB5BD]'}`}>
                                        IND
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
