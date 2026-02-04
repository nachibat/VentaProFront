import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [RouterModule, MatIconModule, MatListModule, MatButtonModule],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
})
export class Sidebar {
    isMenuOpen = false;
    menuItems = [
        { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
        { path: '/productos', icon: 'inventory_2', label: 'Productos' },
        { path: '/proveedores', icon: 'store', label: 'Proveedores' },
        { path: '/ventas', icon: 'shopping_cart', label: 'Ventas' },
        { path: '/clientes', icon: 'people', label: 'Clientes' },
        { path: '/reportes', icon: 'analytics', label: 'Reportes' },
        { path: '/configuracion', icon: 'settings', label: 'Configuración' }
    ];

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        if (window.innerWidth < 768) {
            this.isMenuOpen = false;
        }
    }
}
