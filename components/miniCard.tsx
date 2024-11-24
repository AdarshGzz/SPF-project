// "use client";
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import Image from 'next/image'; // Use Next.js Image component for optimization

// interface ProductCardProps {
//     productId: string;
//     image: string;
//     title: string;
//     price: number;
//     className?: string;
//     previousPrice?: number;
//     maxTitleLength?: number;
// }

// const MiniCard: React.FC<ProductCardProps> = ({
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
//             className={`relative border rounded-lg shadow-lg overflow-hidden group cursor-pointer ${className} max-w-[200px]`} // Set a max width for the card
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
//             <div className="p-2"> {/* Reduced padding */}
//                 <h2 className="text-sm font-semibold mb-1 h-10 overflow-hidden"> {/* Smaller font size */}
//                     {truncateTitle(title, maxTitleLength)}
//                 </h2>
//                 <div className="flex items-baseline">
//                     <span className="text-base font-bold text-gray-900">{price}</span> {/* Smaller font size */}
//                     {previousPrice && (
//                         <span className="ml-1 text-xs text-gray-500 line-through"> {/* Smaller font size */}
//                             {previousPrice}
//                         </span>
//                     )}
//                 </div>
//             </div>

//             {/* Hover Effect */}
//             <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <button className="text-white font-semibold py-1 px-2 rounded text-xs"> {/* Smaller button */}
//                     Details
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MiniCard;



"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    productId: string;
    image: string;
    title: string;
    price: any; // Ensure this is always a number
    className?: string;
    previousPrice?: any;
    maxTitleLength?: number;
}

const MiniCard: React.FC<ProductCardProps> = ({
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

    // Function to safely format price
    const formatPrice = (value: number | undefined) => {
        return typeof value === 'number' ? value.toFixed(2) : '0.00';
    };

    return (
        <div
            className={`
                w-[180px] h-[260px]  
                relative border rounded-lg shadow-lg 
                overflow-hidden group cursor-pointer 
                flex flex-col
                ${className}`}
            onClick={() => router.push(`/Product/${productId}`)}
        >
            {/* Image Container with Fixed Height */}
            <div className="relative w-full h-[180px] flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    priority={false}
                />
            </div>

            {/* Product Details with Fixed Height */}
            <div className="p-2 h-[80px] flex flex-col justify-between bg-white">
                <h2 className="text-sm font-semibold line-clamp-2">
                    {truncateTitle(title, maxTitleLength)}
                </h2>
                <div className="flex items-baseline">
                    <span className="text-base font-bold text-gray-900">
                        ${formatPrice(price)}
                    </span>
                    {previousPrice && (
                        <span className="ml-1 text-xs text-gray-500 line-through">
                            ${formatPrice(previousPrice)}
                        </span>
                    )}
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-gray-800 font-semibold py-1 px-4 rounded text-sm hover:bg-gray-100 transition-colors">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default MiniCard;