
'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dataMenuCoba = [
    {
        href: '/coba',
        name: 'Link Coba',
    },
    {
        href: '/trial',
        name: 'Link Trial',
    },
    {
        href: '/tes',
        name: 'Link Tes',
    }
]

export default function TestLayout(
    { children } : { children : React.ReactNode}
) {
    const pathname = usePathname();
    return (
        <>
            {
                dataMenuCoba.map( (dmenu, nourut) => {
                    return (
                        <Link href={dmenu.href} className={clsx(
                            'flex flex-col m-4 p-10 items-center border',
                            {'bg-yellow-50' : pathname === dmenu.href}
                            
                            
                            )} 
                        >
                            {nourut + 1} {dmenu.name}  
                        </Link>
                    )
                })
            }
            {children}
        </>

        // <div>
        //     <div className="flex flex-col gap-2 m-4">
        //         <Link href='coba' className="p-2 border"> Link Coba </Link>
        //         <Link href='tes' className="p-2 border"> Link Tes </Link>
        //         <Link href='trial' className="p-2 border"> Link Trial </Link>
        //     </div>
        //     <div>
        //         {children}
        //     </div>
        // </div>
    )
}