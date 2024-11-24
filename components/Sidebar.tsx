// "use client";
// import React from 'react';

// // Define an interface for the Category
// interface Category {
//     _id: string;
//     name: string;
//     description?: string;
// }

// interface SidebarProps {
//     categories: Category[];
//     onCategorySelect: (category: Category) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//     categories,
//     onCategorySelect
// }) => {
//     // If no categories, show a placeholder
//     if (categories.length === 0) {
//         return (
//             <div className="w-64 p-4 bg-gray-100">
//                 <h2 className="text-xl font-bold mb-4">Categories</h2>
//                 <div className="animate-pulse">
//                     <div className="h-4 bg-gray-300 rounded mb-2"></div>
//                     <div className="h-4 bg-gray-300 rounded mb-2"></div>
//                     <div className="h-4 bg-gray-300 rounded mb-2"></div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="w-64 p-4 bg-gray-100">
//             <h2 className="text-xl font-bold mb-4">Categories</h2>
//             {categories.map((category) => (
//                 <div
//                     key={category._id}
//                     className="cursor-pointer p-2 hover:bg-gray-200 transition-colors duration-200"
//                     onClick={() => onCategorySelect(category)}
//                 >
//                     {category.name}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Sidebar;






"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Define an interface for the Category
interface Category {
    _id: string;
    name: string;
    description?: string;
}

interface SidebarProps {
    categories: Category[];
    onCategorySelect: (category: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    categories,
    onCategorySelect
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Sidebar content component to avoid duplication
    const SidebarContent = () => {
        // If no categories, show a placeholder
        if (categories.length === 0) {
            return (
                <>
                    <h2 className="text-xl font-bold mb-4">Categories</h2>
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    </div>
                </>
            );
        }

        return (
            <>
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                {categories.map((category) => (
                    <div
                        key={category._id}
                        className="cursor-pointer p-2 hover:bg-gray-200 transition-colors duration-200"
                        onClick={() => {
                            onCategorySelect(category);
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        {category.name}
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 bg-gray-100 rounded-md shadow-md"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 p-4 bg-gray-100 h-full">
                <SidebarContent />
            </div>

            {/* Mobile Sidebar */}
            <div className={`
                lg:hidden 
                fixed 
                inset-0 
                z-40 
                bg-white 
                transform 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                transition-transform 
                duration-300 
                ease-in-out 
                w-64 
                p-4 
                bg-gray-100 
                h-full
            `}>
                <SidebarContent />
            </div>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;