import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-board-card',
    imports: [MatCardModule, MatIconModule],
    templateUrl: './board-card.html',
    styleUrl: './board-card.css',
})
export class BoardCard {
    icon = input<string>('📊');
    title = input<string>('Título');
    value = input<string>('0');
}
