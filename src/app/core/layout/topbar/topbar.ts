import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Avatar } from '../../../shared/components/avatar/avatar';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule, MatIconModule, MatMenuModule, Avatar],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  searchQuery: string = '';

  onSearch() {
    console.info('Searching for:', this.searchQuery);// Implement search logic here
  }
}
