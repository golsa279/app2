import { Component } from '@angular/core';
import { Student } from '../../+models/student';
import { GridComponent } from '../../+components/grid/grid.component';

@Component({
  selector: 'students',
  standalone: true,
  imports: [
    GridComponent
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  remove(student:any) {
  console.log('Remove Clicked!(In Student Component)');
  console.log(student)
  this.students=this.students.filter(m=>m!=student);
  }
  students:Student[]=[
    {id:100,fullname:'Negar Ahmadi',field:'Computer',average:18.5},
    {id:101,fullname:'Donya Karimi',field:'Power',average:14},
    {id:102,fullname:'Kian Omidi',field:'Electronic',average:10},
    {id:103,fullname:'Parsa Ahmadi',field:'Computer',average:9.5},
    {id:104,fullname:'Sara Akbari',field:'Mechanic',average:19},

  ];
}
