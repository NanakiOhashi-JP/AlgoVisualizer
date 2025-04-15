'use client';

import React, { useState } from "react";
import Link from "next/link";

interface DropDownMenuProps {
    title: string;
    items: Array<{
        label: string;
        href: string;
    }>;
}

export function DropDownMenu(props: DropDownMenuProps) {
    const { title, items } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // 外部クリックでドロップダウンを閉じる
    React.useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (isOpen && !(event.target as HTMLElement).closest('.dropdown-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left dropdown-container">
            <button 
                type="button" 
                className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800" 
                id="menu-button" 
                aria-expanded={isOpen} 
                aria-haspopup="true"
                onClick={toggleDropdown}
            >
                {title}
                <svg className="-mr-1 ml-2 h-5 w-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Dropdown menu - isOpenがtrueの時だけ表示 */}
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-none z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                        {items.map((item, index) => (
                            <Link 
                                key={index} 
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}