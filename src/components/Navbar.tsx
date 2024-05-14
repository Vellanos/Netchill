
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item:any) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Les populaires',
                    template: itemRenderer
                },
                {
                    label: 'Les mieux notés',
                    template: itemRenderer
                },
                {
                    label: 'Prochianes sorties',
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
    )
}
        