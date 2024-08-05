import { Component } from '@angular/core';
import { Course } from '../+models/cours';
import { GridComponent } from '../+components/grid/grid.component';

@Component({
  selector: 'courses',
  standalone: true,
  imports: [
    GridComponent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses:Course[]=[
    {id:300,title:'C#'},
    {id:300,title:'Python'},
    {id:300,title:'SQL'},
    {id:300,title:'Java'},
  ]
}
