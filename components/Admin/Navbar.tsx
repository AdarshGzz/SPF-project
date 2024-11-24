// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-xl font-bold">Admin Panel</div>
                <div>
                    <Link href="/admin" className="px-4 hover:bg-gray-700">Dashboard</Link>
                    <Link href="/admin/category" className="px-4 hover:bg-gray-700">Categories</Link>
                    <Link href="/admin/product" className="px-4 hover:bg-gray-700">Products</Link>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;