import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProduct, setGoToProduct] = useState(false);

    const router = useRouter();

    async function saveProduct(e) {
        e.preventDefault();

        const data = { title, description, price };

        if (_id) {
            await axios.put('/api/products', { ...data, _id });
        } else {
            await axios.post('/api/products', data);
        }

        setGoToProduct(true);
    }
    if (goToProduct) {
        router.push('/products');
    }

    return (
        <form onSubmit={saveProduct}>
            <label>Product name</label>
            <input type="text" placeholder="product name" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Description</label>
            <textarea
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Price</label>
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit" className="btn-primary">
                Save
            </button>
        </form>
    );
}
