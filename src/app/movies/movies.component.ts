import { Component } from '@angular/core';
import { SHARED } from '../shared';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SHARED],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

}
