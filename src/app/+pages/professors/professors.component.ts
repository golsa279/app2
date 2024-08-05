import { Component } from '@angular/core';
import { Professor } from '../../+models/professor';
import { GridComponent } from '../../+components/grid/grid.component';

@Component({
  selector: 'professors',
  standalone: true,
  imports: [
    GridComponent
  ],
  templateUrl: './professors.component.html',
  styleUrl: './professors.component.css'
})
export class ProfessorsComponent {
  del($event: any) {
    console.log($event)
  }
  professors: Professor[] = [
    { id: 200, fullname: 'Diba Ghadiri', degree: 'Professor' },
    { id: 201, fullname: 'Raya Karimi', degree: 'Full Professor' },
    { id: 202, fullname: 'Omid Omidi', degree: 'Professor' },
  ]
}
