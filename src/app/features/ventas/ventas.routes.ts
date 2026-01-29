import { Routes } from '@angular/router';
import { Ventas } from './pages/ventas/ventas';
import { VentasCreate } from './pages/ventas-create/ventas-create';

export const ventasRoutes: Routes = [
    {
        path: '',
        component: Ventas
    },
    {
        path: 'nuevo',
        component: VentasCreate
    },
    {
        path: 'editar/:id',
        component: VentasCreate
    }
];