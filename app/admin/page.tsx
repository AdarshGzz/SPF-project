// // app/admin/dashboard/page.tsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import {
//     Package,
//     MessageCircle,
//     Users,
//     Activity,
//     Mail,
//     Eye,
//     Trash2
// } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// interface UserDetails {
//     id: string;
//     email: string;
//     name: string;
// }

// const DEMO_ENQUIRIES = [
//     {
//         id: '1',
//         name: 'John Doe',
//         email: 'john@example.com',
//         message: 'Interested in bulk order',
//         date: '2023-12-15',
//         status: 'Pending'
//     },
//     {
//         id: '2',
//         name: 'Jane Smith',
//         email: 'jane@example.com',
//         message: 'Product availability inquiry',
//         date: '2023-12-14',
//         status: 'Reviewed'
//     },
//     {
//         id: '3',
//         name: 'Mike Johnson',
//         email: 'mike@example.com',
//         message: 'Shipping details question',
//         date: '2023-12-13',
//         status: 'Pending'
//     },
//     {
//         id: '4',
//         name: 'Emily Brown',
//         email: 'emily@example.com',
//         message: 'Custom order request',
//         date: '2023-12-12',
//         status: 'Resolved'
//     }
// ];

// export default function AdminDashboard() {
//     const [user, setUser] = useState<UserDetails | null>(null);
//     const router = useRouter();

//     useEffect(() => {
//         const userDetailsStr = localStorage.getItem('userDetails');
//         if (!userDetailsStr) {
//             router.push('/login');
//             return;
//         }

//         try {
//             const userDetails = JSON.parse(userDetailsStr);
//             setUser(userDetails);
//         } catch {
//             localStorage.removeItem('userDetails');
//             router.push('/login');
//         }
//     }, [router]);

//     const handleLogout = () => {
//         localStorage.removeItem('userDetails');
//         router.push('/login');
//     };

//     const pendingEnquiriesCount = DEMO_ENQUIRIES.filter(e => e.status === 'Pending').length;
//     const totalEnquiriesCount = DEMO_ENQUIRIES.length;

//     if (!user) return null;

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             <div className="container mx-auto">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-8">
//                     <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
//                     <div className="flex items-center space-x-4">
//                         <button
//                             onClick={handleLogout}
//                             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 </div>

//                 {/* Overview Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     {/* Pending Enquiries Card */}
//                     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-lg font-semibold text-gray-600">Pending Enquiries</h2>
//                                 <p className="text-3xl font-bold text-blue-600">{pendingEnquiriesCount}</p>
//                             </div>
//                             <Mail className="w-12 h-12 text-blue-500 opacity-50" />
//                         </div>
//                         <div className="mt-4 text-sm text-gray-500">
//                             {pendingEnquiriesCount} enquiries need your attention
//                         </div>
//                     </div>

//                     {/* Total Enquiries Card */}
//                     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-lg font-semibold text-gray-600">Total Enquiries</h2>
//                                 <p className="text-3xl font-bold text-green-600">{totalEnquiriesCount}</p>
//                             </div>
//                             <MessageCircle className="w-12 h-12 text-green-500 opacity-50" />
//                         </div>
//                         <div className="mt-4 text-sm text-gray-500">
//                             All enquiries received
//                         </div>
//                     </div>

//                     {/* Products Card */}
//                     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-lg font-semibold text-gray-600">Total Products</h2>
//                                 <p className="text-3xl font-bold text-purple-600">24</p>
//                             </div>
//                             <Package className="w-12 h-12 text-purple-500 opacity-50" />
//                         </div>
//                         <div className="mt-4 text-sm text-gray-500">
//                             Products in your catalog
//                         </div>
//                     </div>
//                 </div>

//                 {/* Enquiries Table */}
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                     <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
//                         <h2 className="text-xl font-semibold text-gray-800">Recent Enquiries</h2>
//                         <div className="flex items-center space-x-2">
//                             <Users className="w-5 h-5 text-gray-500" />
//                             <span className="text-sm text-gray-600">Total Users: 50</span>
//                         </div>
//                     </div>
//                     <table className="w-full">
//                         <thead>
//                             <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//                                 <th className="py-3 px-6 text-left">Name</th>
//                                 <th className="py-3 px-6 text-left">Email</th>
//                                 <th className="py-3 px-6 text-left">Message</th>
//                                 <th className="py-3 px-6 text-left">Date</th>
//                                 <th className="py-3 px-6 text-left">Status</th>
//                                 <th className="py-3 px-6 text-center">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-gray-600 text-sm font-light">
//                             {DEMO_ENQUIRIES.map((enquiry) => (
//                                 <tr key={enquiry.id} className="border-b border-gray-200 hover:bg-gray-100">
//                                     <td className="py-3 px-6 text-left whitespace-nowrap">
//                                         <div className="flex items-center">
//                                             <span className="font-medium">{enquiry.name}</span>
//                                         </div>
//                                     </td>
//                                     <td className="py-3 px-6 text-left">
//                                         <div className="flex items-center">
//                                             <span>{enquiry.email}</span>
//                                         </div>
//                                     </td>
//                                     <td className="py-3 px-6 text-left">
//                                         <div className="flex items-center">
//                                             <span>{enquiry.message}</span>
//                                         </div>
//                                     </td>
//                                     <td className="py-3 px-6 text-left">
//                                         <div className="flex items-center">
//                                             <span>{enquiry.date}</span>
//                                         </div>
//                                     </td>
//                                     <td className="py-3 px-6 text-left">
//                                         <span className={`
//                                             px-3 py-1 rounded-full text-xs
//                                             ${enquiry.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
//                                                 enquiry.status === 'Reviewed' ? 'bg-blue-200 text-blue-800' :
//                                                     'bg-green-200 text-green-800'}
//                                         `}>
//                                             {enquiry.status}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-6 text-center">
//                                         <button className="text-blue-500 hover:text-blue-700">
//                                             <Eye className="w-4 h-4 inline" /> View
//                                         </button>
//                                         <button className="text-red-500 hover:text-red-700 ml-2">
//                                             <Trash2 className="w-4 h-4 inline" /> Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }




// 'use client';

// import React, { useEffect, useState } from 'react';
// import {
//     Package,
//     MessageCircle,
//     Users,
//     Activity,
//     Mail,
//     Eye,
//     Trash2,
//     CodeSquare
// } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// interface Enquiry {
//     id: string;
//     name: string;
//     email: string;
//     message: string;
//     date: string;
//     status: string;
//     productId: { title: string }; // Assuming populated product title
// }

// export default function AdminDashboard() {
//     const [user, setUser] = useState<any | null>(null); // Adjusted to hold any user object
//     const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const router = useRouter();

//     useEffect(() => {
//         const userDetailsStr = localStorage.getItem('userDetails');
//         if (!userDetailsStr) {
//             router.push('/login');
//             return;
//         }

//         try {
//             const userDetails = JSON.parse(userDetailsStr);
//             setUser(userDetails);
//         } catch {
//             localStorage.removeItem('userDetails');
//             router.push('/login');
//         }
//     }, [router]);

//     // Fetch Enquiries data from API
//     useEffect(() => {
//         const fetchEnquiries = async () => {
//             try {
//                 const response = await fetch('/api/Enquiry'); // Adjust the URL as necessary
//                 const data = await response.json();
//                 if (data && Array.isArray(data)) {
//                     setEnquiries(data);
//                 }
//                 console.log(data);
//             } catch (error) {
//                 console.error('Error fetching enquiries:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEnquiries();
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('userDetails');
//         router.push('/login');
//     };

//     const pendingEnquiriesCount = enquiries.filter(e => e.status === 'Pending').length;
//     const totalEnquiriesCount = enquiries.length;

//     if (!user) return null;

//     return (
//         <div className="min-h-screen bg-gray-50 p-8">
//             <div className="container mx-auto">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-8">
//                     <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
//                     <div className="flex items-center space-x-4">
//                         <button
//                             onClick={handleLogout}
//                             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 </div>

//                 {/* Overview Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                     {/* Pending Enquiries Card */}
//                     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-lg font-semibold text-gray-600">Pending Enquiries</h2>
//                                 <p className="text-3xl font-bold text-blue-600">{pendingEnquiriesCount}</p>
//                             </div>
//                             <Mail className="w-12 h-12 text-blue-500 opacity-50" />
//                         </div>
//                         <div className="mt-4 text-sm text-gray-500">
//                             {pendingEnquiriesCount} enquiries need your attention
//                         </div>
//                     </div>

//                     {/* Total Enquiries Card */}
//                     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-lg font-semibold text-gray-600">Total Enquiries</h2>
//                                 <p className="text-3xl font-bold text-green-600">{totalEnquiriesCount}</p>
//                             </div>
//                             <MessageCircle className="w-12 h-12 text-green-500 opacity-50" />
//                         </div>
//                         <div className="mt-4 text-sm text-gray-500">
//                             All enquiries received
//                         </div>
//                     </div>

//                     {/* Products Card */}
//                     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//                         <div className="flex justify-between items-center">
//                             <div>
//                                 <h2 className="text-lg font-semibold text-gray-600">Total Products</h2>
//                                 <p className="text-3xl font-bold text-purple-600">24</p>
//                             </div>
//                             <Package className="w-12 h-12 text-purple-500 opacity-50" />
//                         </div>
//                         <div className="mt-4 text-sm text-gray-500">
//                             Products in your catalog
//                         </div>
//                     </div>
//                 </div>

//                 {/* Enquiries Table */}
//                 <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                     <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
//                         <h2 className="text-xl font-semibold text-gray-800">Recent Enquiries</h2>
//                         <div className="flex items-center space-x-2">
//                             <Users className="w-5 h-5 text-gray-500" />
//                             <span className="text-sm text-gray-600">Total Users: 50</span>
//                         </div>
//                     </div>
//                     {loading ? (
//                         <div className="text-center py-4">Loading enquiries...</div>
//                     ) : (
//                         <table className="w-full">
//                             <thead>
//                                 <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
//                                     <th className="py-3 px-6 text-left">Name</th>
//                                     <th className="py-3 px-6 text-left">Email</th>
//                                     <th className="py-3 px-6 text-left">Message</th>
//                                     <th className="py-3 px-6 text-left">Date</th>
//                                     <th className="py-3 px-6 text-left">Status</th>
//                                     <th className="py-3 px-6 text-center">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-600 text-sm font-light">
//                                 {enquiries.map((enquiry) => (
//                                     <tr key={enquiry.id} className="border-b border-gray-200 hover:bg-gray-100">
//                                         <td className="py-3 px-6 text-left whitespace-nowrap">
//                                             <div className="flex items-center">
//                                                 <span className="font-medium">{enquiry.name}</span>
//                                             </div>
//                                         </td>
//                                         <td className="py-3 px-6 text-left">
//                                             <div className="flex items-center">
//                                                 <span>{enquiry.email}</span>
//                                             </div>
//                                         </td>
//                                         <td className="py-3 px-6 text-left">
//                                             <div className="flex items-center">
//                                                 <span>{enquiry.message}</span>
//                                             </div>
//                                         </td>
//                                         <td className="py-3 px-6 text-left">
//                                             <div className="flex items-center">
//                                                 <span>{enquiry.date}</span>
//                                             </div>
//                                         </td>
//                                         <td className="py-3 px-6 text-left">
//                                             <span className={`
//                                                 px-3 py-1 rounded-full text-xs
//                                                 ${enquiry.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
//                                                     enquiry.status === 'Reviewed' ? 'bg-blue-200 text-blue-800' :
//                                                         'bg-green-200 text-green-800'}
//                                             `}>
//                                                 {enquiry.status}
//                                             </span>
//                                         </td>
//                                         <td className="py-3 px-6 text-center">
//                                             <button className="text-blue-500 hover:text-blue-700">
//                                                 <Eye className="w-4 h-4 inline" /> View
//                                             </button>
//                                             <button className="text-red-500 hover:text-red-700 ml-2">
//                                                 <Trash2 className="w-4 h-4 inline" /> Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }




'use client';

import React, { useEffect, useState } from 'react';
import {
    Package,
    MessageCircle,
    Users,
    ShoppingCart,
    MapPin,
    Trash2,
    Eye,
    Mail,
    Plus,
    Minus
} from 'lucide-react';
import { useRouter } from 'next/navigation';

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

interface IEnquiry {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address?: string;
    date: Date;
    status: 'accepted' | 'rejected' | 'none';
    productId: IProduct;
    accepted: boolean;
    createdAt: Date;
}

interface OrderItem {
    productId: string;
    quantity: number;
    price: number;
}

// CreateOrderModal Component
const CreateOrderModal: React.FC<{
    enquiry: IEnquiry;
    onClose: () => void;
    onSubmit: (orderData: FormData) => void;
}> = ({ enquiry, onClose, onSubmit }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(enquiry.productId.discountedPrice || enquiry.productId.price);
    const basePrice = enquiry.productId.discountedPrice || enquiry.productId.price;

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
            setTotalAmount(Number((newQuantity * basePrice).toFixed(2)));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('enquiryId', enquiry._id);
        formData.append('items', JSON.stringify([{
            productId: enquiry.productId._id,
            quantity: quantity,
            price: basePrice
        }]));
        formData.append('totalAmount', totalAmount.toString());
        formData.append('status', 'pending');

        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">Create Order</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product</label>
                        <p className="text-gray-600">{enquiry.productId.title}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Base Price</label>
                        <p className="text-gray-600">${basePrice}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Quantity</label>
                        <div className="flex items-center space-x-3">
                            <button
                                type="button"
                                onClick={() => handleQuantityChange(quantity - 1)}
                                className="p-2 border rounded-md hover:bg-gray-100"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center">{quantity}</span>
                            <button
                                type="button"
                                onClick={() => handleQuantityChange(quantity + 1)}
                                className="p-2 border rounded-md hover:bg-gray-100"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Total Amount</label>
                        <input
                            type="number"
                            value={totalAmount}
                            onChange={(e) => setTotalAmount(Number(e.target.value))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            step="0.01"
                            min="0"
                        />
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Create Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Main Admin Dashboard Component
export default function AdminDashboard() {
    const [user, setUser] = useState<any | null>(null);
    const [enquiries, setEnquiries] = useState<IEnquiry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [selectedEnquiry, setSelectedEnquiry] = useState<IEnquiry | null>(null);
    const [activeTab, setActiveTab] = useState<'pending' | 'rejected'>('pending');

    const router = useRouter();

    // Authentication Effect
    useEffect(() => {
        const userDetailsStr = localStorage.getItem('userDetails');
        if (!userDetailsStr) {
            router.push('/login');
            return;
        }

        try {
            const userDetails = JSON.parse(userDetailsStr);
            setUser(userDetails);
        } catch {
            localStorage.removeItem('userDetails');
            router.push('/login');
        }
    }, [router]);

    // Fetch Enquiries Effect
    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const response = await fetch('/api/Enquiry');
                const data = await response.json();
                if (data && Array.isArray(data)) {
                    setEnquiries(data);
                }
            } catch (error) {
                console.error('Error fetching enquiries:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEnquiries();
    }, []);

    // Filter Enquiries
    const filteredEnquiries = enquiries.filter(enquiry => {
        if (activeTab === 'pending') {
            return enquiry.status === 'none';
        } else {
            return enquiry.status === 'rejected';
        }
    });

    // Handlers
    const handleAddToOrders = async (enquiryId: string) => {
        try {
            const response = await fetch(`/api/orders/${enquiryId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                setEnquiries(prevEnquiries =>
                    prevEnquiries.map(enquiry =>
                        enquiry._id === enquiryId
                            ? { ...enquiry, accepted: true, status: 'accepted' }
                            : enquiry
                    )
                );
            }
        } catch (error) {
            console.error('Error accepting enquiry:', error);
        }
    };

    const handleCreateOrder = async (formData: FormData) => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                await handleAddToOrders(formData.get('enquiryId') as string);
                setShowOrderModal(false);
                alert('Order created successfully');
            } else {
                const error = await response.json();
                throw new Error(error.message);
            }
        } catch (error) {
            console.error('Error creating order:', error);
            alert('Failed to create order');
        }
    };

    const changeStatusToRejected = async (enquiryId: string) => {
            try {
                const response = await fetch(`/api/Enquiry/${enquiryId}`, {
                    method: 'PATCH',
                });

                if (response.ok) {
                    setEnquiries(prevEnquiries =>
                        prevEnquiries.filter(enquiry => enquiry._id !== enquiryId)
                    );
                }
            } catch (error) {
                console.error('Error deleting enquiry:', error);
            }
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const pendingEnquiriesCount = enquiries.filter(e => e.status === 'none').length;
    const rejectedEnquiriesCount = enquiries.filter(e => e.status === 'rejected').length;
    const totalEnquiriesCount = enquiries.length;

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={() => {
                            localStorage.removeItem('userDetails');
                            router.push('/login');
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-600">Pending Enquiries</h2>
                                <p className="text-3xl font-bold text-blue-600">{pendingEnquiriesCount}</p>
                            </div>
                            <Mail className="w-12 h-12 text-blue-500 opacity-50" />
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-600">Products Listed</h2>
                                <p className="text-3xl font-bold text-red-600">{rejectedEnquiriesCount}</p>
                            </div>
                            <Trash2 className="w-12 h-12 text-red-500 opacity-50" />
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-600">Pending Orders</h2>
                                <p className="text-3xl font-bold text-gray-800">{totalEnquiriesCount}</p>
                            </div>
                            <Users className="w-12 h-12 text-gray-500 opacity-50" />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`px-4 py-2 rounded-md ${activeTab === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Pending Enquiries
                    </button>
                    <button
                        onClick={() => setActiveTab('rejected')}
                        className={`px-4 py-2 rounded-md ${activeTab === 'rejected' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Rejected Enquiries
                    </button>
                </div>

                {loading ? (
                    <p>Loading enquiries...</p>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Phone</th>
                                    <th className="px-4 py-2 text-left">Date</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                    <th className="px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEnquiries.map(enquiry => (
                                    <tr key={enquiry._id}>
                                        <td className="border px-4 py-2">{enquiry.name}</td>
                                        <td className="border px-4 py-2">{enquiry.email}</td>
                                        <td className="border px-4 py-2">{enquiry.phoneNumber}</td>
                                        <td className="border px-4 py-2">{formatDate(enquiry.date)}</td>
                                        <td className="border px-4 py-2">{enquiry.status}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedEnquiry(enquiry);
                                                    setShowOrderModal(true);
                                                }}
                                                className="text-blue-500 hover:underline"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => changeStatusToRejected(enquiry._id)}
                                                className="text-red-500 hover:underline ml-4"
                                            >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {showOrderModal && selectedEnquiry && (
                    <CreateOrderModal
                        enquiry={selectedEnquiry}
                        onClose={() => setShowOrderModal(false)}
                        onSubmit={handleCreateOrder}
                    />
                )}
            </div>
        </div>
    );
}