// // import React, { useEffect, useState } from 'react';
// // import MiniCard from './miniCard';
// // import { ChevronRight } from 'lucide-react';

// // type Product = {
// //     _id: string;
// //     images: string[];
// //     title: string;
// //     price: number;
// //     discountedPrice?: number;
// // };

// // const CategoryProduct = ({ category }: { category: string }) => {
// //     const [products, setProducts] = useState<Product[]>([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [error, setError] = useState<string | null>(null);

// //     useEffect(() => {
// //         if (category) {
// //             const fetchProducts = async () => {
// //                 setIsLoading(true);
// //                 setError(null);
// //                 try {
// //                     const response = await fetch(`/api/product/get-products-by-category/${category}`);
// //                     if (!response.ok) {
// //                         throw new Error('Failed to fetch products');
// //                     }
// //                     const data = await response.json();
// //                     setProducts(data);
// //                 } catch (error) {
// //                     setError('Failed to load products. Please try again later.');
// //                     console.error('Error fetching products:', error);
// //                 } finally {
// //                     setIsLoading(false);
// //                 }
// //             };

// //             fetchProducts();
// //         }
// //     }, [category]);

// //     if (error) {
// //         return (
// //             <div className="min-h-[80vh] flex items-center justify-center">
// //                 <div className="text-center p-6 bg-red-50 rounded-lg">
// //                     <p className="text-red-600">{error}</p>
// //                     <button
// //                         onClick={() => window.location.reload()}
// //                         className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
// //                     >
// //                         Retry
// //                     </button>
// //                 </div>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="min-h-[80vh] px-4 md:px-6 lg:px-8 py-8 bg-gray-50">
// //             {/* Category Header */}
// //             <div className="mb-8">
// //                 <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
// //                     <span>Home</span>
// //                     <ChevronRight className="w-4 h-4" />
// //                     <span className="text-gray-900">{category}</span>
// //                 </div>
// //                 <h1 className="text-3xl font-bold text-gray-900 mb-2">
// //                     {category} Collection
// //                 </h1>
// //                 <p className="text-gray-600">
// //                     Discover our carefully curated selection of {category.toLowerCase()} products
// //                 </p>
// //             </div>

// //             {/* Products Grid */}
// //             {isLoading ? (
// //                 <div className="container mx-auto px-4 w-full">
// //                     <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
// //                         {[...Array(12)].map((_, index) => (
// //                             <div
// //                                 key={index}
// //                                 className="animate-pulse"
// //                             >
// //                                 <div className="bg-gray-200 w-full h-[180px] rounded-lg mb-2"></div>
// //                                 <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
// //                                 <div className="bg-gray-200 h-4 w-full rounded"></div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             ) : (
// //                 <>
// //                     {products.length === 0 ? (
// //                         <div className="flex flex-col items-center justify-center py-12">
// //                             <div className="text-center">
// //                                 <h3 className="mt-2 text-sm font-semibold text-gray-900">No products found</h3>
// //                                 <p className="mt-1 text-sm text-gray-500">
// //                                     We couldn't find any {category.toLowerCase()} products at the moment.
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     ) : (
// //                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 animate-fade-in">
// //                             {products.map((product) => (
// //                                 <div
// //                                     key={product._id}
// //                                     className="transform hover:-translate-y-1 transition-transform duration-300"
// //                                 >
// //                                     <MiniCard
// //                                         productId={product._id}
// //                                         image={product.images[0]}
// //                                         title={product.title}
// //                                         price={product.price}
// //                                         previousPrice={product.discountedPrice}
// //                                     />
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     )}

// //                     {/* Results Summary */}
// //                     <div className="mt-6 text-sm text-gray-500 text-center">
// //                         Showing {products.length} {products.length === 1 ? 'product' : 'products'} in {category}
// //                     </div>
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // export default CategoryProduct;

// // // Add this to your global CSS
// // const styles = `
// // @keyframes fade-in {
// //     from {
// //         opacity: 0;
// //         transform: translateY(10px);
// //     }
// //     to {
// //         opacity: 1;
// //         transform: translateY(0);
// //     }
// // }

// // .animate-fade-in {
// //     animation: fade-in 0.6s ease-out;
// // }
// // `;



// import React, { useEffect, useState } from 'react';
// import MiniCard from './miniCard';
// import { ChevronRight } from 'lucide-react';

// type Product = {
//     _id: string;
//     images: string[];
//     title: string;
//     price: number;
//     discountedPrice?: number;
// };

// const CategoryProductSkeleton = () => {
//     return (
//         <div className="container mx-auto px-4 w-full">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//                 {[...Array(12)].map((_, index) => (
//                     <div key={index} className="space-y-2">
//                         <div className="bg-gray-200 h-40 w-full aspect-square rounded-lg animate-pulse"></div>
//                         <div className="space-y-2">
//                             <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
//                             <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const CategoryProduct = ({ category }: { category: string }) => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (category) {
//             const fetchProducts = async () => {
//                 setIsLoading(true);
//                 setError(null);
//                 try {
//                     const response = await fetch(`/api/product/get-products-by-category/${category}`);
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch products');
//                     }
//                     const data = await response.json();
//                     setProducts(data);
//                 } catch (error) {
//                     setError('Failed to load products. Please try again later.');
//                     console.error('Error fetching products:', error);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             };

//             fetchProducts();
//         }
//     }, [category]);

//     if (error) {
//         return (
//             <div className="min-h-[80vh] flex items-center justify-center">
//                 <div className="text-center p-6 bg-red-50 rounded-lg">
//                     <p className="text-red-600">{error}</p>
//                     <button
//                         onClick={() => window.location.reload()}
//                         className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
//                     >
//                         Retry
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-[80vh] px-4 md:px-6 lg:px-8 py-8 bg-gray-50">
//             {/* Category Header */}
//             <div className="mb-8">
//                 <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
//                     <span>Home</span>
//                     <ChevronRight className="w-4 h-4" />
//                     <span className="text-gray-900">{category}</span>
//                 </div>
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                     {category} Collection
//                 </h1>
//                 <p className="text-gray-600">
//                     Discover our carefully curated selection of {category.toLowerCase()} products
//                 </p>
//             </div>

//             {/* Products Grid */}
//             {isLoading ? (
//                 <CategoryProductSkeleton />
//             ) : (
//                 <>
//                     {products.length === 0 ? (
//                         <div className="flex flex-col items-center justify-center py-12">
//                             <div className="text-center">
//                                 <h3 className="mt-2 text-sm font-semibold text-gray-900">No products found</h3>
//                                 <p className="mt-1 text-sm text-gray-500">
//                                     We couldn't find any {category.toLowerCase()} products at the moment.
//                                 </p>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 animate-fade-in">
//                             {products.map((product) => (
//                                 <div
//                                     key={product._id}
//                                     className="transform hover:-translate-y-1 transition-transform duration-300"
//                                 >
//                                     <MiniCard
//                                         productId={product._id}
//                                         image={product.images[0]}
//                                         title={product.title}
//                                         price={product.price}
//                                         previousPrice={product.discountedPrice}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Results Summary */}
//                     <div className="mt-6 text-sm text-gray-500 text-center">
//                         Showing {products.length} {products.length === 1 ? 'product' : 'products'} in {category}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default CategoryProduct;

// // Global CSS or Tailwind config
// const styles = `
// @keyframes pulse {
//     0%, 100% {
//         opacity: 1;
//     }
//     50% {
//         opacity: 0.5;
//     }
// }

// @keyframes fade-in {
//     from {
//         opacity: 0;
//         transform: translateY(10px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// .animate-pulse {
//     animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }

// .animate-fade-in {
//     animation: fade-in 0.6s ease-out;
// }
// `;








import React, { useEffect, useState } from 'react';
import MiniCard from './miniCard';
import { ChevronRight } from 'lucide-react';
import LoadingScreen from './ui/LoadingScreen';

type Product = {
    _id: string;
    images: string[];
    title: string;
    price: number;
    discountedPrice?: number;
};

const CategoryProductSkeleton = () => {
    return (
        <div className="container mx-auto w-full px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="space-y-2">
                        <div className="bg-gray-200 h-40 w-full aspect-square rounded-lg animate-pulse"></div>
                        <div className="space-y-2">
                            <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
                            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CategoryProduct = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (category) {
            const fetchProducts = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    const response = await fetch(`/api/product/get-products-by-category/${category}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setProducts(data);
                } catch (error) {
                    setError('Failed to load products. Please try again later.');
                    console.error('Error fetching products:', error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchProducts();
        }
    }, [category]);

    if (error) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="text-center p-6 bg-red-50 rounded-lg max-w-md w-full">
                    <p className="text-red-600">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] px-4 md:px-6 lg:px-8 py-8 bg-gray-50 w-full mx-auto">
            {/* Category Header */}
            <div className="mb-8 max-w-screen-xl mx-auto">
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-900">{category}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {category} Collection
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                    Discover our carefully curated selection of {category.toLowerCase()} products
                </p>
            </div>

            {/* Products Grid */}
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="max-w-screen-xl mx-auto">
                    {products.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="text-center">
                                <h3 className="mt-2 text-sm font-semibold text-gray-900">No products found</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    We couldn't find any {category.toLowerCase()} products at the moment.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 animate-fade-in">
                                {products.map((product) => (
                                    <div
                                        key={product._id}
                                        className="transform hover:-translate-y-1 transition-transform duration-300"
                                    >
                                        <MiniCard
                                            productId={product._id}
                                            image={product.images[0]}
                                            title={product.title}
                                            price={product.price}
                                            previousPrice={product.discountedPrice}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Results Summary */}
                            {/* <div className="mt-6 text-sm text-gray-500 text-center">
                                Showing {products.length} {products.length === 1 ? 'product' : 'products'} in {category}
                            </div> */}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoryProduct;