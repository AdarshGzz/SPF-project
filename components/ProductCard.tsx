// "use client";
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import Image from 'next/image'; // Use Next.js Image component for optimization

// interface ProductCardProps {
//     productId: string;
//     image: string;
//     title: string;
//     price: string;
//     className?: string;
//     previousPrice?: string;
//     maxTitleLength?: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//     image,
//     title,
//     price,
//     previousPrice,
//     className,
//     productId,
//     maxTitleLength = 30,
// }) => {
//     const router = useRouter();

//     // Function to truncate title
//     const truncateTitle = (title: string, maxLength: number) => {
//         if (title.length > maxLength) {
//             return `${title.substring(0, maxLength)}...`;
//         }
//         return title;
//     };

//     return (
//         <div
//             className={`relative border rounded-lg shadow-lg overflow-hidden group cursor-pointer ${className}`}
//             onClick={() => router.push(`/Product/${productId}`)}
//         >
//             {/* Image Container with Fixed Aspect Ratio */}
//             <div className="relative w-full h-0 pb-[100%]"> {/* 1:1 Aspect Ratio */}
//                 <Image
//                     src={image}
//                     alt={title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="absolute inset-0 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
//                     priority={false}
//                 />
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-2 h-12 overflow-hidden">
//                     {truncateTitle(title, maxTitleLength)}
//                 </h2>
//                 <div className="flex items-baseline">
//                     <span className="text-xl font-bold text-gray-900">{price}</span>
//                     {previousPrice && (
//                         <span className="ml-2 text-sm text-gray-500 line-through">
//                             {previousPrice}
//                         </span>
//                     )}
//                 </div>
//             </div>

//             {/* Hover Effect */}
//             <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button className="text-white font-semibold py-2 px-4 rounded">
//                     Details
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;





"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    productId: string;
    image: string;
    title: string;
    price: string;
    className?: string;
    previousPrice?: string;
    maxTitleLength?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    price,
    previousPrice,
    className,
    productId,
    maxTitleLength = 30,
}) => {
    const router = useRouter();

    const truncateTitle = (title: string, maxLength: number) => {
        if (title.length > maxLength) {
            return `${title.substring(0, maxLength)}...`;
        }
        return title;
    };

    return (
        <div
            className={`
                w-[300px] h-[400px] 
                relative border rounded-lg shadow-lg 
                overflow-hidden group cursor-pointer 
                flex flex-col bg-white
                ${className}`}
            onClick={() => router.push(`/Product/${productId}`)}
        >
            {/* Image Container with Fixed Height */}
            <div className="relative w-full h-[300px] flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    priority={false}
                />
            </div>

            {/* Product Details with Fixed Height */}
            <div className="p-4 h-[100px] flex flex-col justify-between">
                <h2 className="text-lg font-semibold line-clamp-2">
                    {truncateTitle(title, maxTitleLength)}
                </h2>
                <div className="flex items-baseline">
                    <span className="text-xl font-bold text-gray-900">{price}</span>
                    {previousPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                            {previousPrice}
                        </span>
                    )}
                </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;