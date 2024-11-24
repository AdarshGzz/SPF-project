// NewProductPage.tsx
'use client';

import ProductForm from '@/components/Admin/ProductForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProductPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/product', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create product');
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

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Create New Product</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <ProductForm
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}