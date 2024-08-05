import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  remove(row:any) {
    //console.log('Remove clicked!(In grid)');
    //console.log(row);
    this.onRemove.emit(row);
  }
  edit(row:any) {
    console.log('Edit clicked!(In grid)');
    console.log(row);
    this.onEdit.emit(row);
  }
  @Input() data:any[]=[];
  @Input() columns:string[]=[];
  @Output() onRemove=new EventEmitter<any>();
  @Output() onEdit=new EventEmitter<any>();
}
