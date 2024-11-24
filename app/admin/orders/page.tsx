

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Eye, Package, CheckCircle, MapPin } from 'lucide-react';

// // Interfaces
// interface IProduct {
//     _id: string;
//     title: string;
//     price: number;
//     discountedPrice: number;
//     description: string;
//     images: string[];
//     category: string;
//     createdAt: Date;
// }

// interface IOrder {
//     _id: string;
//     orderNumber: string;
//     totalAmount: number;
//     status: string;
//     datePlaced: Date;
//     items: {
//         productId: IProduct;
//         quantity: number;
//     }[];
//     enquiryId: {
//         name: string;
//         email: string;
//         phoneNumber: string;
//         address: string;
//     };
// }

// // Product Details Modal Component
// const ProductDetailsModal: React.FC<{
//     product: IProduct;
//     onClose: () => void
// }> = ({ product, onClose }) => {
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//             <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative">
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M6 18L18 6M6 6l12 12"
//                         />
//                     </svg>
//                 </button>

//                 {/* Modal Content */}
//                 <div className="grid md:grid-cols-2 gap-8">
//                     {/* Product Images */}
//                     <div className="grid grid-cols-2 gap-4">
//                         {product.images.map((image, index) => (
//                             <div
//                                 key={index}
//                                 className="aspect-square overflow-hidden rounded-xl"
//                             >
//                                 <img
//                                     src={image}
//                                     alt={`Product ${index + 1}`}
//                                     className="w-full h-full object-cover hover:scale-105 transition-transform"
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Product Details */}
//                     <div className="space-y-4">
//                         <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>

//                         <div className="bg-gray-50 p-4 rounded-xl">
//                             <p className="text-sm text-gray-600 mb-2">Description</p>
//                             <p className="text-gray-800">{product.description}</p>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div>
//                                 <p className="text-sm text-gray-600">Price</p>
//                                 <p className="text-2xl font-bold text-green-600">
//                                     ${product.discountedPrice || product.price}
//                                 </p>
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">Category</p>
//                                 <p className="font-medium">{product.category}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Main Orders Page Component
// export default function OrdersPage() {
//     // State Management
//     const [orders, setOrders] = useState<IOrder[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

//     // Fetch Orders Effect
//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await fetch('/api/orders');
//                 const data = await response.json();
//                 if (Array.isArray(data)) {
//                     setOrders(data);
//                 }
//                 console.log(data);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchOrders();
//     }, []);

//     // Mark Order as Delivered
//     const handleMarkAsDelivered = async (orderId: string) => {
//         try {
//             const response = await fetch(`/api/orders/${orderId}/mark-delivered`, {
//                 method: 'PATCH',
//             });

//             if (response.ok) {
//                 setOrders((prevOrders) =>
//                     prevOrders.map((order) =>
//                         order._id === orderId ? { ...order, status: 'delivered' } : order
//                     )
//                 );
//                 alert('Order marked as delivered');
//             } else {
//                 alert('Failed to mark order as delivered');
//             }
//         } catch (error) {
//             console.error('Error marking order as delivered:', error);
//         }
//     };

//     // Date Formatting Utility
//     const formatDate = (date: Date) => {
//         return new Date(date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//         });
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
//             <div className="container mx-auto max-w-6xl">
//                 {/* Page Header */}
//                 <div className="flex items-center mb-10 space-x-4">
//                     <Package className="w-10 h-10 text-blue-600" />
//                     <h1 className="text-4xl font-bold text-gray-800">Order Management</h1>
//                 </div>

//                 {/* Loading State */}
//                 {loading ? (
//                     <div className="flex justify-center items-center h-64">
//                         <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
//                     </div>
//                 ) : (
//                     // Orders Table
//                     <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//                         <table className="w-full">
//                             {/* Table Header */}
//                             <thead className="bg-blue-50 border-b border-gray-200">
//                                 <tr>
//                                     {['Order Number', 'Product', 'Customer', 'Date', 'Actions'].map((header) => (
//                                         <th
//                                             key={header}
//                                             className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                         >
//                                             {header}
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>

//                             {/* Table Body */}
//                             <tbody>
//                                 {orders.map((order) => (
//                                     <tr
//                                         key={order._id}
//                                         className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
//                                     >
//                                         <td className="px-6 py-4">{order.orderNumber}</td>
//                                         <td className="px-6 py-4">
//                                             <div className="flex items-center">
//                                                 <span>{order.items[0].productId.title}</span>
//                                             </div>
//                                         </td>
//                                         <td className="px-6 py-4">
//                                             <div>
//                                                 <p><strong>{order.enquiryId.name}</strong></p>
//                                                 <p>{order.enquiryId.email}</p>
//                                                 <p>{order.enquiryId.phoneNumber}</p>
//                                                 <p>{order.enquiryId.address}</p>
//                                             </div>
//                                         </td>
//                                         <td className="px-6 py-4">{formatDate(order.datePlaced)}</td>
//                                         <td className="px-6 py-4 text-center">
//                                             <div className="flex justify-center space-x-2">
//                                                 <button
//                                                     onClick={() => {
//                                                         setSelectedProduct(order.items[0].productId);
//                                                     }}
//                                                     className="flex items-center text-blue-500 hover:text-blue-700"
//                                                 >
//                                                     <Eye className="w-4 h-4 mr-1" />
//                                                     View
//                                                 </button>
//                                                 <button
//                                                     onClick={() => handleMarkAsDelivered(order._id)}
//                                                     className="flex items-center text-green-500 hover:text-green-700"
//                                                 >
//                                                     <CheckCircle className="w-4 h-4 mr-1" />
//                                                     Mark as Delivered
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>

//             {/* Product Details Modal */}
//             {selectedProduct && (
//                 <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
//             )}
//         </div>
//     );
// }





'use client';

import React, { useState, useEffect } from 'react';
import { Eye, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert";

// Interfaces
interface IProduct {
    _id: string;
    title: string;
    price: number;
    discountedPrice: number;
    description: string;
    images: string[];
    category: string;
    createdAt: Date;
}

interface IOrder {
    _id: string;
    orderNumber: string;
    totalAmount: number;
    status: 'pending' | 'delivered';
    datePlaced: Date;
    items: {
        productId: IProduct;
        quantity: number;
    }[];
    enquiryId: {
        name: string;
        email: string;
        phoneNumber: string;
        address: string;
    };
}

// Product Details Modal Component
const ProductDetailsModal: React.FC<{
    product: IProduct;
    onClose: () => void
}> = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div className="grid grid-cols-2 gap-4">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-square overflow-hidden rounded-xl"
                            >
                                <img
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>

                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p className="text-sm text-gray-600 mb-2">Description</p>
                            <p className="text-gray-800">{product.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Price</p>
                                <p className="text-2xl font-bold text-green-600">
                                    ${product.discountedPrice || product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Orders Page Component
export default function OrdersPage() {
    // State Management
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
    const [activeTab, setActiveTab] = useState<'pending' | 'delivered'>('pending');

    // New state for alerts
    const [alert, setAlert] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    // Clear alert after 3 seconds
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    // Fetch Orders Effect
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/orders');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setOrders(data);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
                setAlert({
                    type: 'error',
                    message: 'Failed to fetch orders'
                });
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    // Mark Order as Delivered
    const handleMarkAsDelivered = async (orderId:string) => {
        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: 'PUT',
            });

            if (response.ok) {
                setOrders((prevOrders) =>
                    prevOrders.map((order) =>
                        order._id === orderId ? { ...order, status: 'delivered' } : order
                    )
                );
                setAlert({
                    type: 'success',
                    message: 'Order marked as delivered successfully'
                });
            } else {
                setAlert({
                    type: 'error',
                    message: 'Failed to mark order as delivered'
                });
            }
        } catch (error) {
            console.error('Error marking order as delivered:', error);
            setAlert({
                type: 'error',
                message: 'An error occurred while marking order as delivered'
            });
        }
    };

    // Date Formatting Utility
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Filter orders based on active tab
    const filteredOrders = orders.filter(order => order.status === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
            {/* Alert Component */}
            {alert && (
                <div className="fixed top-4 right-4 z-50">
                    <Alert
                        variant={alert.type === 'success' ? 'default' : 'destructive'}
                    >
                        {alert.type === 'success' ? (
                            <CheckCircle className="h-4 w-4" />
                        ) : (
                            <AlertCircle className="h-4 w-4" />
                        )}
                        <AlertTitle>
                            {alert.type === 'success' ? 'Success' : 'Error'}
                        </AlertTitle>
                        <AlertDescription>
                            {alert.message}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
            <div className="container mx-auto max-w-6xl">
                {/* Page Header */}
                <div className="flex items-center mb-10 space-x-4">
                    <Package className="w-10 h-10 text-blue-600" />
                    <h1 className="text-4xl font-bold text-gray-800">Order Management</h1>
                </div>

                {/* Tab Navigation */}
                <div className="mb-6 flex space-x-4">
                    {[
                        {
                            key: 'pending',
                            label: 'Pending Orders',
                            icon: <Clock className="w-5 h-5 mr-2" />
                        },
                        {
                            key: 'delivered',
                            label: 'Delivered Orders',
                            icon: <CheckCircle className="w-5 h-5 mr-2" />
                        }
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as any)}
                            className={`
                                flex items-center px-4 py-2 rounded-lg transition-all
                                ${activeTab === tab.key
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
                            `}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounde d-full h-10 w-10 border-t-2 border-blue-500 border-solid"></div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {filteredOrders.length === 0 ? (
                            <div className="text-center py-10 text-gray-500">
                                No {activeTab} orders found
                            </div>
                        ) : (
                            <table className="w-full">
                                {/* Table Header */}
                                <thead className="bg-blue-50 border-b border-gray-200">
                                    <tr>
                                        {['Order Number', 'Product', 'Customer', 'Date', 'Actions'].map((header) => (
                                            <th
                                                key={header}
                                                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {filteredOrders.map((order) => (
                                        <tr
                                            key={order._id}
                                            className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4">{order.orderNumber}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <span className="font-medium">{order.items[0].productId.title}</span>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedProduct(order.items[0].productId);
                                                        }}
                                                        className="
                    inline-flex items-center 
                    px-2 py-1 
                    bg-blue-50 text-blue-600 
                    hover:bg-blue-100 
                    rounded-md 
                    text-xs 
                    transition-colors
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-300
                "
                                                    >
                                                        <Eye className="w-3 h-3 mr-1" />
                                                        View
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p><strong>{order?.enquiryId?.name}</strong></p>
                                                    <p>{order?.enquiryId?.email}</p>
                                                    <p>{order?.enquiryId?.phoneNumber}</p>
                                                    <p>{order?.enquiryId?.address}</p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{formatDate(order.datePlaced)}</td>
                                            <td className="px-6 py-4 text-center">
                                                {activeTab === 'pending' && (
                                                    <button
                                                        onClick={() => handleMarkAsDelivered(order._id)}
                                                        className="
                    inline-flex items-center 
                    px-3 py-1.5 
                    bg-green-50 text-green-600 
                    hover:bg-green-100 
                    rounded-md 
                    text-sm 
                    transition-colors
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-green-300
                "
                                                    >
                                                        <CheckCircle className="w-4 h-4 mr-2" />
                                                        Mark as Delivered
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}

                {/* Product Details Modal */}
                {selectedProduct && (
                    <ProductDetailsModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        </div>
    );
}