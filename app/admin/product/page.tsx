// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function ProductsPage() {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [page, setPage] = useState(1);
//     const router = useRouter();
    
//     const handleNavigate = ()=>{
//         router.push('/admin/product/new-product');
//     }

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 setIsLoading(true);
//                 const response = await fetch(`/api/product?page=${page}`);

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }

//                 const data = await response.json();
//                 setProducts(data.products);
//             } catch (err) {
//                 setError(err instanceof Error ? err.message : 'An error occurred');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [page]);

//     const handleDeleteProduct = async (productId: string) => {
//         try {
//             const response = await fetch(`/api/product/${productId}`, {
//                 method: 'DELETE'
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to delete product');
//             }

//             // Remove the deleted product from the list
//             setProducts(prev => prev.filter((product: any) => product._id !== productId));
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'An error occurred');
//         }
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold mb-4">Products</h1>

//             <div onClick={handleNavigate}
//                 className="bg-blue-500 text-white p-2 rounded mb-4 inline-block"
//             >
//                 Add New Product
//             </div>

//             <ul className="space-y-4">
//                 {products.map((product: any) => (
//                     <li key={product._id} className="border p-4 rounded">
//                         <h2 className="text-xl font-semibold">{product.title}</h2>
//                         <p>Price: ${product.price}</p>
//                         <p>Discounted Price: ${product.discountedPrice}</p>
//                         <p>{product.description}</p>
//                         <div className="flex space-x-2">
//                             {product.images.map((image: string, index: number) => (
//                                 <img
//                                     key={index}
//                                     src={image}
//                                     alt={`Product image ${index + 1}`}
//                                     className="w-20 h-20 object-cover rounded"
//                                 />
//                             ))}
//                         </div>
//                         <div className="mt-2">
//                             <Link
//                                 href={`product/edit-product/${product._id}`}
//                                 className="text-blue-500 mr-2"
//                             >
//                                 Edit
//                             </Link>
//                             <button
//                                 onClick={() => handleDeleteProduct(product._id)}
//                                 className="text-red-500"
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>

//             <div className="mt-4">
//                 <button
//                     onClick={() => setPage(prev => Math.max(prev - 1, 1))}
//                     disabled={page === 1}
//                     className="bg-gray-300 p-2 rounded mr-2"
//                 >
//                     Previous
//                 </button>
//                 <button
//                     onClick={() => setPage(prev => prev + 1)}
//                     className="bg-gray-300 p-2 rounded"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Pencil, Trash, Plus } from 'lucide-react';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/admin/product/new-product');
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/product`);

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDeleteProduct = async (productId: string) => {
        try {
            const response = await fetch(`/api/product/${productId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            // Remove the deleted product from the list
            setProducts(prev => prev.filter((product: any) => product._id !== productId));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };

    if (isLoading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
        </div>
    );

    if (error) return <div className="text-red-500 text-center mt-10">Error: {error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Product List {`(${products.length})`}</h1>
                <button
                    onClick={handleNavigate}
                    className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    <Plus className="h-5 w-5 mr-2" />
                    Add New Product
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discounted Price</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product: any) => (
                            <tr key={product._id} className="hover:bg-gray-50 transition duration-150">
                                <td className="px-4 py-3">
                                    {product.images.length > 0 && (
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    )}
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-900">{product.title}</td>
                                <td className="px-4 py-3 text-gray-500">${product.price}</td>
                                <td className="px-4 py-3 text-green-600">${product.discountedPrice}</td>
                                <td className="px-4 py-3">
                                    <div className="flex space-x-2">
                                        <Link
                                            href={`product/edit-product/${product._id}`}
                                            className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
                                        >
                                            <button className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition duration-300">
                                                <Pencil className="h-5 w-5" />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            className="flex items-center bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition duration-300"
                                        >
                                            <Trash className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}