// // ProductDetail.tsx
// "use client"; // This line converts the component to a Client Component

// import React, { useState } from 'react';
// import Header from './Header';
// import SimilarProductsCarousel from './SimilarProductsCarousel'; // Import the new carousel component
// import EnquiryModal from './EnquiryModal'; // Import the EnquiryModal

// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     discountedPrice?: number;
//     description: string;
//     images: string[];
// }


// interface ProductDetailProps {
//     product: any; // Ensure this matches the Product interface
// }

// const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
//     const [currentImage, setCurrentImage] = useState(product.images[0]);
//     const [isOpen, setIsOpen] = useState(false); // State to control modal visibility

//     return (
//         <div className='w-full '>
//             <Header />

//             <div className="mx-auto p-6 bg-white w-full">
//                 <div className="flex flex-col md:flex-row">
//                     {/* Thumbnails on the left */}
//                     <div className="flex flex-col mr-1">
//                         {product.images.map((image:any, index:any) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 alt={`Thumbnail ${index + 1}`}
//                                 className="w-24 h-24 rounded-lg cursor-pointer hover:opacity-75 transition mb-2"
//                                 onClick={() => setCurrentImage(image)} // Update the main image on click
//                             />
//                         ))}
//                     </div>

//                     {/* Main Product Image */}
//                     <div className="flex-1">
//                         <div className="flex justify-center">
//                             <img
//                                 src={currentImage}
//                                 alt={product.title}
//                                 className="max-w-[600px] max-h-[600px] w-[500px] h-[500px] rounded-lg shadow-lg object-contain" // Increased max dimensions for the main image
//                             />
//                         </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="flex-1 md:ml-6 mt-6 md:mt-0">
//                         <h1 className="text-2xl font-bold">{product.title}</h1>
//                         <div className="mt-2">
//                             {product.discountedPrice ? (
//                                 <div className="flex items-center">
//                                     <span className="text-xl font-bold text-red-600">
//                                         ${product.discountedPrice.toFixed(2)}
//                                     </span>
//                                     <span className="ml-2 line-through text-gray-500">${product.price.toFixed(2)}</span>
//                                 </div>
//                             ) : (
//                                 <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
//                             )}
//                         </div>
//                         <p className="mt-4 text-gray-700">{product.description}</p>
//                         <button
//                             className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
//                             onClick={() => setIsOpen(true)} // Open the modal on button click
//                         >
//                             Enquire Now
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Similar Products Carousel */}
//             <SimilarProductsCarousel  category={product.category.name} />

//             {/* Enquiry Modal */}
//             <EnquiryModal productId={product.id} isOpen={isOpen} onClose={() => setIsOpen(false)} />
//         </div>
//     );
// };

// export default ProductDetail;






import React, { useState } from 'react';
import Header from './Header';
import SimilarProductsCarousel from './SimilarProductsCarousel';
import EnquiryModal from './EnquiryModal';

interface Product {
    id: number;
    title: string;
    price: number;
    discountedPrice?: number;
    description: string;
    images: string[];
}

interface ProductDetailProps {
    product: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(product.images[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full min-h-screen">
            <Header />

            <div className="mx-auto p-4 sm:p-6 bg-white w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image Section with Thumbnails */}
                    <div className="flex flex-col-reverse sm:flex-row lg:flex-row gap-4 lg:w-2/3">
                        {/* Thumbnails */}
                        <div className="flex sm:flex-col overflow-x-auto lg:overflow-visible gap-2 sm:gap-4">
                            {product.images.map((image: any, index: any) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-lg cursor-pointer hover:opacity-75 transition"
                                    onClick={() => setCurrentImage(image)}
                                />
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                src={currentImage}
                                alt={product.title}
                                className="w-full max-w-[500px] h-auto aspect-square object-contain rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="lg:w-1/3 flex flex-col">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{product.title}</h1>

                        <div className="mt-4">
                            {product.discountedPrice ? (
                                <div className="flex items-center gap-2">
                                    <span className="text-lg sm:text-xl font-bold text-red-600">
                                        ${product.discountedPrice.toFixed(2)}
                                    </span>
                                    <span className="text-sm sm:text-base line-through text-gray-500">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>
                            ) : (
                                <span className="text-lg sm:text-xl font-bold text-gray-900">
                                    ${product.price.toFixed(2)}
                                </span>
                            )}
                        </div>

                        {/* Mobile: Enquire Now Button Above Description */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-4 sm:hidden w-full px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
                        >
                            Enquire Now
                        </button>

                        <p className="mt-4 text-sm sm:text-base text-gray-700">
                            {product.description}
                        </p>

                        {/* Desktop: Enquire Now Button Below Description */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="mt-6 hidden sm:block w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
                        >
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="mt-8 w-full">
                <SimilarProductsCarousel category={product.category.name} />
            </div>

            {/* Enquiry Modal */}
            <EnquiryModal
                productId={product.id}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export default ProductDetail;