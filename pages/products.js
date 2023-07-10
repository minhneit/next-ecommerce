import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '~/components/Layout,';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then((response) => {
            setProducts(response.data);
        });
    }, []);
    return (
        <Layout>
            <Link href={'/products/new'} className="bg-blue-900 text-white py-1 px-2 rounded-md">
                Add new product
            </Link>

            <table className="basic mt-5">
                <thead>
                    <tr>
                        <td>Product name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>
                                <Link className="basic " href={'/products/edit/' + product._id}>
                                    <PencilSquareIcon className="w-5 h-5" />
                                    Edit
                                </Link>

                                <Link className="basic " href={'/products/delete/' + product._id}>
                                    <TrashIcon className="w-5 h-5" />
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}

export default Products;
