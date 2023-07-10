/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import {
    BuildingStorefrontIcon,
    HomeIcon,
    QueueListIcon,
    ArchiveBoxIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

function Nav() {
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-lg';
    const router = useRouter();
    const { pathname } = router;
    return (
        <aside className="text-white p-4">
            <Link href={'/'} className="flex gap-1 mb-4">
                <BuildingStorefrontIcon className="w-[24px]  h-[24px]" />
                <span>EcommerceAdmin</span>
            </Link>

            <nav className="flex flex-col gap-2">
                <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink}>
                    <HomeIcon className="w-[24px] h-[24px]" />
                    Dashboard
                </Link>

                <Link href={'/products'} className={pathname.includes('/products') ? activeLink : inactiveLink}>
                    <QueueListIcon className="w-[24px] h-[24px]" />
                    Products
                </Link>

                <Link href={'/orders'} className={pathname.includes('/orders') ? activeLink : inactiveLink}>
                    <ArchiveBoxIcon className="w-[24px] h-[24px]" />
                    Orders
                </Link>

                <Link href={'/setting'} className={pathname.includes('/setting') ? activeLink : inactiveLink}>
                    <Cog6ToothIcon className="w-[24px] h-[24px]" />
                    Setting
                </Link>
            </nav>
        </aside>
    );
}

export default Nav;
