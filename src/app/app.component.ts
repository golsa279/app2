import { Component } from '@angular/core';
import { StudentsComponent } from './+pages/students/students.component';
import { ProfessorsComponent } from './+pages/professors/professors.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StudentsComponent,
    ProfessorsComponent,
    CoursesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
}
