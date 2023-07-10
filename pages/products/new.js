import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '~/components/Layout,';
import ProductForm from '~/components/ProductForm';

function NewProduct() {
    return (
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    );
}

export default NewProduct;
