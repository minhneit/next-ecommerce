/* eslint-disable react/no-unescaped-entities */
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '~/components/Layout,';

export default function DeleteProductPage() {
    const [productInfo, setProductInfo] = useState();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id=' + id).then((response) => {
            setProductInfo(response.data);
        });
    }, [id]);

    function goBack() {
        router.push('/products');
    }

    async function deleteProduct() {
        await axios.delete('/api/products?id=' + id);
        goBack();
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center h-[200px] bg-blue-900 w-[400px] m-auto mt-28 rounded-lg relative">
                <button onClick={goBack}>
                    <XMarkIcon className="w-5 h-5 rounded-sm absolute right-0 top-0 bg-red-600 m-2 text-white" />
                </button>
                <h1 className=" text-white "> Do you want to delete &nbsp;"{productInfo?.title}"</h1>
                <div className="flex gap-2 justify-center items-center">
                    <button className="btn-red" onClick={deleteProduct}>
                        Yes
                    </button>
                    <button className="btn-default" onClick={goBack}>
                        No
                    </button>
                </div>
            </div>
        </Layout>
    );
}
