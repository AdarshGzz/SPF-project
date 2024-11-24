
import React, { useState, useEffect } from 'react';
import MarkdownEditor from '../MardownEditor';

interface ProductFormProps {
    initialData?: any; // Accept initial data for editing
    onSubmit: (formData: FormData) => Promise<void>;
    isLoading?: boolean;
}

export default function ProductForm({
    initialData,
    onSubmit,
    isLoading = false
}: ProductFormProps) {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        discountedPrice: '',
        description: '',
        category: ''
    });
    const [categories, setCategories] = useState<any[]>([]);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    useEffect(() => {
        // Fetch categories from API
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/category');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        // Set initial data if provided (for editing)
        if (initialData) {
            setFormData({
                title: initialData.title || '',
                price: initialData.price?.toString() || '',
                discountedPrice: initialData.discountedPrice?.toString() || '',
                description: initialData.description || '',
                category: initialData.category || '' // Set initial category
            });
            if (initialData.images) {
                setImagePreviews(initialData.images);
            }
        }

        fetchCategories(); // Fetch categories
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDescriptionChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            description: value
        }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const validFiles = files.slice(0, 4 - imageFiles.length);
            const newImagePreviews = validFiles.map(file => URL.createObjectURL(file));

            setImageFiles(prev => [...prev, ...validFiles]);
            setImagePreviews(prev => [...prev, ...newImagePreviews]);
        }
    };

    const removeImage = (indexToRemove: number) => {
        setImageFiles(prev => prev.filter((_, index) => index !== indexToRemove));
        setImagePreviews(prev => prev.filter((_, index) => index !== indexToRemove));

        // Revoke the object URL to prevent memory leaks
        if (imagePreviews[indexToRemove].startsWith('blob:')) {
            URL.revokeObjectURL(imagePreviews[indexToRemove]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation checks
        if (!formData.title || !formData.price || !formData.category || !formData.description) {
            alert('Please fill in all fields.');
            return;
        }

        if (formData.discountedPrice && parseFloat(formData.discountedPrice) >= parseFloat(formData.price)) {
            alert('Discounted price must be less than the original price.');
            return;
        }

        const submitFormData = new FormData();

        // Append text fields
        submitFormData.append('title', formData.title);
        submitFormData.append('price', formData.price);
        if (formData.discountedPrice) {
            submitFormData.append('discountedPrice', formData.discountedPrice);
        }
        submitFormData.append('description', formData.description);
        submitFormData.append('category', formData.category);

        // Append image files
        imageFiles.forEach((file) => {
            submitFormData.append('images', file);
        });

        await onSubmit(submitFormData);
    };

    // Clean up object URLs when component unmounts
    useEffect(() => {
        return () => {
            imagePreviews.forEach(preview => {
                if (preview.startsWith('blob:')) {
                    URL.revokeObjectURL(preview);
                }
            });
        };
    }, [imagePreviews]);

    return (
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            {/* Title Input */}
            <div>
                <label className="block mb-2">Product Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                />
            </div>

            {/* Price Inputs */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        step="0.01"
                        min="0"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Discounted Price</label>
                    <input
                        type="number"
                        name="discountedPrice"
                        value={formData.discountedPrice}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        step="0.01"
                        min="0"
                    />
                </div>
            </div>

            {/* Description with Markdown */}
            <div>
                <label className="block mb-2">Description</label>
                <MarkdownEditor
                    value={formData.description}
                    onChange={handleDescriptionChange}
                />
            </div>

            {/* Category Selection */}
            <div>
                <label className="block mb-2">Category</label>
                <select
                    name="category"
                    value={formData.category} 
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                >
                    <option value="">Select a Category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Image Upload */}
            <div>
                <label className="block mb-2">Upload Images (Max 4)</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-3 py-2 border rounded"
                    disabled={imageFiles.length >= 4}
                />
                <div className="flex space-x-2 mt-2">
                    {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative">
                            <img
                                src={preview}
                                alt={`Product image ${index + 1}`}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
                disabled={isLoading}
            >
                {isLoading ? 'Submitting...' : initialData ? 'Update Product' : 'Create Product'}
            </button>
        </form>
    );
}
