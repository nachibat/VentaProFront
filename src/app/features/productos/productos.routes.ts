import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { ProductosCreate } from './pages/productos-create/productos-create';

export const productosRoutes: Routes = [
    {
        path: '',
        component: Productos
    },
    {
        path: 'nuevo',
        component: ProductosCreate
    },
    {
        path: 'editar/:id',
        component: ProductosCreate
    }
];