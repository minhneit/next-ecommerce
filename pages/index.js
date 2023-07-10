/* eslint-disable @next/next/no-img-element */
import { useSession } from 'next-auth/react';
import Layout from '~/components/Layout,';

export default function Home() {
    const { data: session } = useSession();
    return (
        <Layout>
            <div className="text-blue-900 flex justify-between">
                <h2>
                    Hello, <b>{session?.user?.email}</b>
                </h2>
                <div className="flex gap-1 items-center bg-gray-300 text-black p-2 rounded-lg">
                    <img src={session?.user?.image} alt="" className="w-8 h-8 rounded-full" />
                    <span className="px-2 font-semibold font-roboto"> {session?.user?.name}</span>
                </div>
            </div>
        </Layout>
    );
}
