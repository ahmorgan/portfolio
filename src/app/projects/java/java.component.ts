import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [],
  templateUrl: './java.component.html',
  styleUrl: './java.component.css'
})
export class JavaComponent {
  _count: number = 3;
  
  get count(): number {
    return this._count;
  }
}
