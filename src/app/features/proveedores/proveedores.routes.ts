import { Routes } from '@angular/router';
import { Proveedores } from './pages/proveedores/proveedores';
import { ProveedoresCreate } from './pages/proveedores-create/proveedores-create';

export const proveedoresRoutes: Routes = [
    {
        path: '',
        component: Proveedores
    },
    {
        path: 'nuevo',
        component: ProveedoresCreate
    },
    {
        path: 'editar/:id',
        component: ProveedoresCreate
    }
];