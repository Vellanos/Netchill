"use client"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import Link from 'next/link';

export default function Navbar() {
    const itemRenderer = (item:any) => (
        <Link href={`/${item.link}${item.link.length > 0 ? '/1':''}`} className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
        </Link>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            link: '',
            template: itemRenderer
        },
        {
            label: 'Rechercher',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Les populaires',
                    icon: 'pi pi-star',
                    link: 'popular',
                    template: itemRenderer
                },
                {
                    label: 'Les mieux notés',
                    icon: 'pi pi-thumbs-up',
                    link: 'rated',
                    template: itemRenderer
                },
                {
                    label: 'Prochaines sorties',
                    icon: 'pi pi-calendar',
                    link: 'upcoming',
                    template: itemRenderer
                },
            ]
        },
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

    return (
        <div className="card">
            <Menubar model={items} start={start}/>
        </div>
    );
}
