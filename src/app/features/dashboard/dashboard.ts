import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats = [
    { title: 'Ventas del Mes', value: '0', icon: '💰' },
    { title: 'Productos', value: '0', icon: '📦' },
    { title: 'Proveedores', value: '0', icon: '🏢' },
    { title: 'Total Ingresos', value: '$0', icon: '📈' }
  ];
}
