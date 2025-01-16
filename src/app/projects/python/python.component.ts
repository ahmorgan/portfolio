import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [],
  templateUrl: './python.component.html',
  styleUrl: './python.component.css'
})
export class PythonComponent {
  _count: number = 3;
  
  get count(): number {
    return this._count;
  }
}
