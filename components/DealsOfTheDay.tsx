
// "use client"

// // types.ts
// export interface Deal {
//     _id: string; // Unique identifier for the product
//     title: string;
//     price: number; // Original price
//     discountedPrice: number; // Current price after discount
//     description: string; // Product description
//     images: string[]; // Array of image URLs
//     category: string; // Category ID or name
//     createdAt: string; // Creation date
// }

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import ProductCard from './ProductCard';

// const DealsOfTheDay: React.FC = () => {
//     const [deals, setDeals] = useState<Deal[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchDeals = async () => {
//             try {
//                 const response = await fetch('/api/product'); // Adjust the API endpoint as necessary
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 console.log(data);
//                 setDeals(data.products);
//             } catch (error) {
//                 setError('Failed to fetch products');
//                 console.error('Fetch products error:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDeals();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     console.log("deals:",deals)

//     return (
//         <div className="bg-white p-4 rounded shadow-md">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-bold">Featured Products</h2>
//                 <a href="#" className="text-blue-500">View More</a>
//             </div>
//             <div className="grid grid-cols-4 gap-4 ">
//                 {deals.map((deal,i) => (
//                     <ProductCard
//                         key={i} // Assuming each product has a unique _id
//                         productId={deal._id}
//                         image={deal?.images[0]} // Use the first image from the images array
//                         title={deal?.title}
//                         price={`₹ ${deal?.discountedPrice} `} // Assuming discountedPrice is the current price
//                         previousPrice={`₹ ${deal?.price} `} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DealsOfTheDay;







"use client"

// types.ts
export interface Deal {
    _id: string; // Unique identifier for the product
    title: string;
    price: any; // Original price
    discountedPrice: any; // Current price after discount
    description: string; // Product description
    images: string[]; // Array of image URLs
    category: string; // Category ID or name
    createdAt: string; // Creation date
}

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import MiniCard from './miniCard';


const DealsOfTheDay: React.FC = () => {
    const [deals, setDeals] = useState<Deal[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check initial screen size
        checkMobile();

        // Add event listener to check screen size on resize
        window.addEventListener('resize', checkMobile);

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await fetch('/api/product'); // Adjust the API endpoint as necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setDeals(data.products);
            } catch (error) {
                setError('Failed to fetch products');
                console.error('Fetch products error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDeals();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-white p-4 rounded shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Featured Products</h2>
                <a href="#" className="text-blue-500">View More</a>
            </div>
            <div className={`
                grid 
                ${isMobile
                ? 'grid-cols-2 sm:grid-cols-3 gap-2'
                : 'sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4'
                }
            `}>
                {deals.map((deal, i) => (
                    isMobile ? (
                        <MiniCard
                            key={i}
                            productId={deal._id}
                            image={deal?.images[0]}
                            title={deal?.title}
                            price={`₹ ${deal?.discountedPrice} `}
                            previousPrice={`₹ ${deal?.price} `}
                        />
                    ) : (
                        <ProductCard
                            key={i}
                            productId={deal._id}
                            image={deal?.images[0]}
                            title={deal?.title}
                            price={`₹ ${deal?.discountedPrice} `}
                            previousPrice={`₹ ${deal?.price} `}
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default DealsOfTheDay;