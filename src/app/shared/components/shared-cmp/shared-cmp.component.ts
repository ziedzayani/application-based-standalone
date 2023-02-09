import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-cmp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-cmp.component.html',
  styleUrls: ['./shared-cmp.component.scss']
})
export class SharedCmpComponent {

}
