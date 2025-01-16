import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  count = 0;

  getProjectCount(): void {
    let elems: HTMLCollectionOf<Element> = document.getElementsByClassName('card');
    this.count += Array.from(elems).length;
  }
}
