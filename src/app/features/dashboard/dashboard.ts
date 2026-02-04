import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BoardCard } from '../../shared/components/board-card/board-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, BoardCard],
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
