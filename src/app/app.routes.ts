import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/login/login').then(m => m.Login)
    },
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'productos',
                loadChildren: () => import('./features/productos/productos.routes').then(m => m.productosRoutes)
            },
            {
                path: 'proveedores',
                loadChildren: () => import('./features/proveedores/proveedores.routes').then(m => m.proveedoresRoutes)
            },
            {
                path: 'ventas',
                loadChildren: () => import('./features/ventas/ventas.routes').then(m => m.ventasRoutes)
            },
            {
                path: '**',
                loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound)
            }

        ]
    },
];
