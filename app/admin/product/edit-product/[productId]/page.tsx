'use client';

import ProductForm from '@/components/Admin/ProductForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';  // Import useParams hook

interface Product {
    title: string;
    price: number;
    discountedPrice?: number;
    description: string;
    category: string;
    images: string[];
}

export default function EditProductPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [initialData, setInitialData] = useState<Product | null>(null);
    const router = useRouter();

    const { productId } = useParams();  // Use the useParams hook to access the params

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`/api/product/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const data = await response.json();
                setInitialData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred');
                console.error('Fetch error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        if (productId) {
            fetchProductData();
        }
    }, [productId]);

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/product/${productId}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to update product');
            }

            router.push('/admin/product');
            router.refresh();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
            console.error('Submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {initialData && (
                    <ProductForm
                        initialData={initialData}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                )}
            </div>
        </div>
    );
}
