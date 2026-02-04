import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-avatar',
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {

}
