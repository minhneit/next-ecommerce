import { useSession, signIn, signOut } from 'next-auth/react';
import Nav from '~/components/Nav';

export default function Layout({ children }) {
    const { data: session } = useSession();
    if (!session) {
        return (
            <div className="bg-blue-900 h-screen w-screen flex justify-center items-center">
                <div className="text-center w-full">
                    <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">
                        Login with Google
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="flex bg-blue-900 min-h-screen ">
            <Nav />
            <div className="flex-grow bg-white mt-2 mr-2 mb-2 p-4 rounded-lg">{children}</div>
        </div>
    );
}
